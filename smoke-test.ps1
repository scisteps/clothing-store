$ErrorActionPreference = 'Continue'
Set-Location 'c:\Other repos\cdd\clothing-store'

$stdout = Join-Path $env:TEMP 'next-start.out.log'
$stderr = Join-Path $env:TEMP 'next-start.err.log'

$proc = Start-Process -FilePath 'node' `
  -ArgumentList 'node_modules/next/dist/bin/next', 'start', '-p', '3111' `
  -PassThru -RedirectStandardOutput $stdout -RedirectStandardError $stderr -WindowStyle Hidden

Start-Sleep -Seconds 18

$base = 'http://127.0.0.1:3111'

try {
  $home = Invoke-WebRequest "$base/" -UseBasicParsing -TimeoutSec 30
  Write-Output "GET / => $($home.StatusCode)"
  Write-Output "HTML length => $($home.Content.Length)"
  Write-Output "has 'Featured Products' => $($home.Content -match 'Featured Products')"
  Write-Output "has 'Scrunchies' heading => $($home.Content -match '>Scrunchies<')"
  Write-Output "has 'Bags' heading => $($home.Content -match '>Bags<')"
  Write-Output "has 'T-Shirts' heading => $($home.Content -match '>T-Shirts<')"
  Write-Output "UGX occurrences => $(([regex]::Matches($home.Content, 'UGX')).Count)"
  Write-Output "img tags => $(([regex]::Matches($home.Content, '<img')).Count)"

  $links = [regex]::Matches($home.Content, '/p/\d+/[A-Za-z0-9\-]+') | ForEach-Object { $_.Value } | Select-Object -Unique
  Write-Output "product links => $($links.Count)"
  $links | Select-Object -First 3 | ForEach-Object { Write-Output "  $_" }
} catch {
  Write-Output "GET / => FAIL $($_.Exception.Message)"
}

$images = @(
  'hairbowclips.jpeg', 'ugscrunch.jpeg', 'duffelmed.jpeg', 'backpack2.jpeg',
  'portablesanitarypadbags.jpeg', 'toiletbag%20med.jpeg', 'tablemat1.jpg',
  'scrunch1.jpg', 'blackbaddie.png', 'trudy%20sag1.png', 'black%20crop1.png', 'drings.png'
)

foreach ($image in $images) {
  try {
    $res = Invoke-WebRequest "$base/images/$image" -UseBasicParsing -TimeoutSec 25
    Write-Output "/images/$image => $($res.StatusCode)"
  } catch {
    Write-Output "/images/$image => FAIL $($_.Exception.Message)"
  }
}

try {
  $api = Invoke-WebRequest "$base/api/home" -UseBasicParsing -TimeoutSec 25
  $json = $api.Content | ConvertFrom-Json
  Write-Output "GET /api/home => $($api.StatusCode) products=$($json.products.Count) arrivals=$($json.arrivals.Count)"
} catch {
  Write-Output "GET /api/home => FAIL $($_.Exception.Message)"
}

Stop-Process -Id $proc.Id -Force -ErrorAction SilentlyContinue
Write-Output 'server stopped'
