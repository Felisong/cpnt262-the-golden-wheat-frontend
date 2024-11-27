"use client";

// import React from "react";

// export default function Cards() {
//   <div class="max-w-sm rounded overflow-hidden shadow-lg">
//     <img
//       class="w-full"
//       src="/public/bread1.png"
//       alt="Sunset in the mountains"
//     />
//     <div class="px-6 py-4">
//       <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
//       <p class="text-yellow-400 text-base">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
//         quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
//         nihil.
//       </p>
//     </div>
//     <div class="px-6 pt-4 pb-2">
//       <span class="inline-block bg-rose-300 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
//         #photography
//       </span>
//       <span class="inline-block bg-rose-300 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
//         #travel
//       </span>
//       <span class="inline-block bg-rose-300 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
//         #winter
//       </span>
//     </div>
//   </div>;
// }

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function CardDefault() {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src="/bread1.png" alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}
