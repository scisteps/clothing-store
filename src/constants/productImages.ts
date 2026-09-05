import Quonnect from '../images/Quonnect.png';
import backpack from '../images/backpack.jpg';
import black_crop1 from '../images/black crop1.png';
import blackbaddie from '../images/blackbaddie.png';
import drings from '../images/drings.png';
import duffel1 from '../images/duffel1.jpg';
import duffel2 from '../images/duffel2.jpg';
import duffel3 from '../images/duffel3.jpg';
import duffel4 from '../images/duffel4.jpg';
import duffel5 from '../images/duffel5.jpg';
import duffel6 from '../images/duffel6.jpg';
import duffle4 from '../images/duffle4.jpg';
import laptopsleeve from '../images/laptopsleeve.jpg';
import laptopsleeve2 from '../images/laptopsleeve2.jpg';
import paulyna_logo from '../images/paulyna logo.png';
import scrunch1 from '../images/scrunch1.jpg';
import scrunch2 from '../images/scrunch2.jpg';
import scrunch3 from '../images/scrunch3.jpg';
import scrunch4 from '../images/scrunch4.jpg';
import scrunch5 from '../images/scrunch5.jpg';
import scrunchie3 from '../images/scrunchie3.jpg';
import tablemat1 from '../images/tablemat1.jpg';
import tablemat2 from '../images/tablemat2.jpg';
import toiletbag from '../images/toiletbag.jpg';
import trudy_sag1 from '../images/trudy sag1.png';
import trudy_sag3 from '../images/trudy sag3.png';

export const imageMap: Record<string, any> = {
  '/images/Quonnect.png': Quonnect,
  '/images/backpack.jpg': backpack,
  '/images/black crop1.png': black_crop1,
  '/images/blackbaddie.png': blackbaddie,
  '/images/drings.png': drings,
  '/images/duffel1.jpg': duffel1,
  '/images/duffel2.jpg': duffel2,
  '/images/duffel3.jpg': duffel3,
  '/images/duffel4.jpg': duffel4,
  '/images/duffel5.jpg': duffel5,
  '/images/duffel6.jpg': duffel6,
  '/images/duffle4.jpg': duffle4,
  '/images/laptopsleeve.jpg': laptopsleeve,
  '/images/laptopsleeve2.jpg': laptopsleeve2,
  '/images/paulyna logo.png': paulyna_logo,
  '/images/scrunch1.jpg': scrunch1,
  '/images/scrunch2.jpg': scrunch2,
  '/images/scrunch3.jpg': scrunch3,
  '/images/scrunch4.jpg': scrunch4,
  '/images/scrunch5.jpg': scrunch5,
  '/images/scrunchie3.jpg': scrunchie3,
  '/images/tablemat1.jpg': tablemat1,
  '/images/tablemat2.jpg': tablemat2,
  '/images/toiletbag.jpg': toiletbag,
  '/images/trudy sag1.png': trudy_sag1,
  '/images/trudy sag3.png': trudy_sag3,
};

export function resolveProductImage(path?: string) {
  if (!path) return undefined;
  return imageMap[path] || path;
}
