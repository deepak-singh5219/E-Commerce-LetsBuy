// import {sanityClient} from '@sanity/client';
//  import { imageUrlBuilder } from "@sanity/image-url";

 const sanityClient = require('@sanity/client');
 const imageUrlBuilder = require('@sanity/image-url');
  
export const client = sanityClient({
    projectId:'r6wqcxyd',
    dataset:'production',
    apiVersion:'2022-03-10',
    useCdn:'true',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
 });

 const builder = imageUrlBuilder(client);
 export const urlFor = (source) => builder.image(source); 
