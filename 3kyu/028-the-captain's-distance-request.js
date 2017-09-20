/*
Ahoi!
We are on a big sailing boat off the coast of Croatia. The captain, by the name of Haversine, wants you to help him out: "Arrr, we need to
know the distance between these two points on the map, so I know how long we need to wait before we get to our beloved treasure!". As this
is the fourth of such requests by your captain, you decide to write a function to calculate the distance between two coordinates.

Complete the function so it returns the distance between two given coordinates. Examples of given coordinates are:
48° 12′ 30″ N, 16° 22′ 23″ E
23° 33′ 0″ S, 46° 38′ 0″ W
58° 18′ 0″ N, 134° 25′ 0″ W
33° 51′ 35″ S, 151° 12′ 40″ E

The returned distance should be in kilometers.
We think about the earth as a sphere with radius 6371 km.
As our captain has a good binocular and the fact, that we are lazy, we don't take precision too serious. So it is sufficient for the result
to be precise to 10 km. Round to the lower 10 km. So 6387 becomes 6380, 643 becomes 640 and 18299 becomes 18290.
You can expect the delivered coordinates to be valid.
The characters for minutes (′) and seconds (″) are not standard quotation marks. If you experience any encoding/escaping issues, you can
get them as follows:
unescape("%B0"); // °
unescape("%u2032"); // ′
unescape("%u2033"); // ″

Examples of inputs and the expected outputs:
distance("48° 12′ 30″ N, 16° 22′ 23″ E", "23° 33′ 0″ S, 46° 38′ 0″ W"); // Returns 10130
distance("48° 12′ 30″ N, 16° 22′ 23″ E", "58° 18′ 0″ N, 134° 25′ 0″ W"); // Returns 7870
distance("48° 12′ 30″ N, 16° 22′ 23″ E", "48° 12′ 30″ N, 16° 22′ 23″ E"); // Returns 0

As you try and try and just don't seem to be able to find the solution, the ship's first mate, an old white bearded man gives you a small
hint: "There are many ways to tackle the problem. Guess which one's the captain's favourite! His name was not given to him by accident!"

Good luck, navigator!
*/

strToDegs = (news) => {
  let coord = news.match(/\d+|[NEWS]/g);
  let degree = +coord[0];
  let minutes = coord[1] / 60;
  let seconds = coord[2] / 3600;
  let hemisphere = (coord[3] === 'S' || coord[3] === 'W') ? -1 : 1;

  return (degree + minutes + seconds) * hemisphere;
};

degToRads = (degrees) => degrees * Math.PI / 180;

function distance(coord1, coord2) {
  let [lat1, lng1] = coord1.split(', ');
  let [lat2, lng2] = coord2.split(', ');
  let a;
  let c;
  let d;
  const EARTH_RADIUS = 6371;
  let deltaLat = degToRads(strToDegs(lat2) - strToDegs(lat1));
  let deltaLng = degToRads(strToDegs(lng2) - strToDegs(lng1));

  // use haversine formula
  lat1 = degToRads(strToDegs(lat1));
  lat2 = degToRads(strToDegs(lat2));
  a = Math.sin(deltaLat/2) * Math.sin(deltaLat/2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLng/2) * Math.sin(deltaLng/2);
  c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  d = EARTH_RADIUS * c;

  return Math.floor(d/10) * 10;
}

// another one solution (i dont know how to read this)
                      let distance
                   =  (coord1,  coord2,
                inverseHaversine = (radius
              , coord1, coord2, haversine  =
            (coord1,  coord2, haversineTheta =
           t => Math.pow(Math.sin( t / 2 ), 2),
          coordinateConvert = s => s.split(/,\s*/
         ).map(s => s.split(/[^0-9A-Z]+/).reduce(
        (r, i) => (i === 'N' || i === 'E') ? r : (
        i  ===  'S'  ||  i  ===  'W' )  ?  -r  : (
        60 * Number(r) + Number(i))) / 3600 / 180 *
        Math.PI),  phi  =  coordinateConvert(coord1
        ),   lambda  =  coordinateConvert( coord2 )
        ) => haversineTheta( lambda[0] - phi[0]) +
         Math.cos(phi[0])  * Math.cos(lambda[0]) *
          haversineTheta( lambda[1]  -  phi[1] )
           ) => 2* radius * Math.asin(Math.sqrt(
            haversine(  coord1,  coord2  ) ) )
             )=>coord1 === coord2 ? 0 : Math.
               floor( inverseHaversine(6300
                  + 71,  coord1,  coord2
                      ) / 10 ) * 10;
