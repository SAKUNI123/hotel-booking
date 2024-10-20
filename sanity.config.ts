import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import dotenv from 'dotenv';
import { deskTool } from 'sanity/desk';
dotenv.config();


export default defineConfig({
  name: 'default',
  title: 'hotel-management',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string, // your project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string, // use 'production' as your default dataset

  basePath: '/studio',
  plugins: [ visionTool(),deskTool()],

  schema: {
    types: schemaTypes,
  },
});
