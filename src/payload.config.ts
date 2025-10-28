// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Navbar } from './globals/Navbar'

import {  Home } from './collections/Home'

import { AboutHeroComponent } from './collections/about/About'
import { OurFoundersComponent } from './collections/about/OurFounders'
import { TestimonialsComponent } from './collections/testimonials/Testimonials'
import { VideoGalleryComponent } from './collections/about/ResourceCenter'
import { ConfidentialityStatementComponent } from './collections/about/ConfidentialityStatementComponent'
import { GalleryComponent } from './collections/gallery/GalleryComponent'
import { NonSurgicalGalleryComponent } from './collections/gallery/non-surgical/NonSurgicalGalleryComponent'
import { SurgicalGalleryComponent } from './collections/gallery/surgical/SurgicalGalleryComponent'
import { MedicalSpaComponent } from './collections/medicalspa/MedicalSpaComponent'
import { MedicalSpaInjectablesComponent } from './collections/medicalspa/MedicalSpaInjectablesComponent'
import { BotoxPageComponent } from './collections/medicalspa/BotoxPageComponent'
import { DysportPageComponent } from './collections/medicalspa/DysportPageComponent'
import { DermalFillersPageComponent } from './collections/medicalspa/DermalFillersPageComponent'
import { JuvedermPageComponent } from './collections/medicalspa/JuvedermPageComponent'
import { JuvedermVoluxPageComponent } from './collections/medicalspa/JuvedermVoluxPageComponent'
import { RestylanePageComponent } from './collections/medicalspa/RestylanePageComponent'
import { RestylaneContourPageComponent } from './collections/medicalspa/RestylaneContourPageComponent'
import { CheekFillersPageComponent } from './collections/medicalspa/CheekFillersPageComponent'
import { LinesAndWrinklesPageComponent } from './collections/medicalspa/LinesAndWrinklesPageComponent'
import { LipFillersPageComponent } from './collections/medicalspa/LipFillersPageComponent'
import { ChinFillersPageComponent } from './collections/medicalspa/ChinFillersPageComponent'
import { HandRejuvenationPageComponent } from './collections/medicalspa/HandRejuvenationPageComponent'
import { LiquidFaceliftPageComponent } from './collections/medicalspa/LiquidFaceliftPageComponent'
import { LiquidRhinoplastyPageComponent } from './collections/medicalspa/LiquidRhinoplastyPageComponent'
import { SkinVivePageComponent } from './collections/medicalspa/SkinVivePageComponent'
import { SpaServicesPageComponent } from './collections/medicalspa/SpaServicesPageComponent'
import { LashExtensionsPageComponent } from './collections/medicalspa/LashExtensionsPageComponent'
import { MensServicesPageComponent } from './collections/medicalspa/MensServicesPageComponent'
import { MicroChannelingPageComponent } from './collections/medicalspa/MicroChannelingPageComponent'
import { PermanentMakeupPageComponent } from './collections/medicalspa/PermanentMakeupPageComponent'
import { DiamondGlowPageComponent } from './collections/medicalspa/DiamondGlowPageComponent'
import SkinMedicaPage from './collections/medicalspa/SkinMedicaPageComponent'

import { SpecialsRewardsPageComponent } from './collections/specialRewards/SpecialsRewardsPageComponent'
import { SpecialsPageComponent } from './collections/specialRewards/SpecialsPageComponent'
import { AlleRewardsPageComponent } from './collections/specialRewards/AlleRewardsPageComponent'
import { AspireRewardsPageComponent } from './collections/specialRewards/AspireRewardsPageComponent'
import { GiftCardsPageComponent } from './collections/specialRewards/GiftCardsPageComponent'
import { MedicalFinancingPageComponent } from './collections/finance/MedicalFinancingPageComponent'
import { TrainingPageComponent } from './collections/traning/TrainingPageComponent'
import { ProgramDetailsComponent } from './collections/traning/ProgramDetailsComponent'
import { ComprehensiveProgramComponent } from './collections/traning/ComprehensiveProgramComponent'
import { FoundationalProgramComponent } from './collections/traning/FoundationalProgramComponent'
import LipFillersPage from './collections/gallery/non-surgical/LipFillersGallery'

import BotoxPage from './collections/gallery/non-surgical/BotoxPage'
import CheekContourGallery from './collections/gallery/non-surgical/CheekContourGallery'
import DermanGalleryHero from './collections/gallery/non-surgical/DermanGalleryHero'
import JuvedermGallery from './collections/gallery/non-surgical/JuvedermGallery'
import KybellaGallery from './collections/gallery/non-surgical/KybellaGallery'
import MicroChannelingGallery from './collections/gallery/non-surgical/MicroChannelingGallery'
import RestylaneGallery from './collections/gallery/non-surgical/RestylaneGallery'
import SkinMedicaGallery from './collections/gallery/non-surgical/SkinMedicaGallery'
import LiquidChinJawGallery from './collections/gallery/non-surgical/LiquidChinJawGallery'
import LiquidRhinoplastyGallery from './collections/gallery/non-surgical/LiquidRhinoplastyGallery'
import MarionetteLineGallery from './collections/gallery/non-surgical/MarionetteLineGallery'
import LiquidFaceliftGallery from './collections/gallery/non-surgical/LiquidFaceliftGallery'
import WeightLossGallery from './collections/gallery/non-surgical/WeightLossGallery'
import LashExtensionsGallery from './collections/gallery/non-surgical/LashExtensionsGallery'
import TummyTuckPage from './collections/gallery/surgical/TummyTuckGallery'
import MommyMakeoverGallery from './collections/gallery/surgical/MommyMakeoverGallery'
import LiposuctionGallery from './collections/gallery/surgical/LiposuctionGallery'
import BreastAugmentationGallery from './collections/gallery/surgical/BreastAugmentationGallery'
import BreastLiftGallery from './collections/gallery/surgical/BreastLiftGallery'
import SkincareServicesPage from './collections/medicalspa/SkincareServicesPageComponent'
import { WeightLossPageComponent } from './collections/medicalspa/WeightLossPage'
import { SemaglutideInjectionsPageComponent } from './collections/medicalspa/SemaglutideInjectionsPage'
import { PlasticSurgeryPageComponent } from './collections/plasticSurgery/PlasticSurgeryComponent'
import { BreastPageComponent } from './collections/plasticSurgery/BreastPageComponent'
import { BreastAugmentationPageComponent } from './collections/plasticSurgery/BreastAugmentationPageComponent'
import { BreastLiftPageComponent } from './collections/plasticSurgery/BreastLiftPageComponent'
import { BreastReductionPageComponent } from './collections/plasticSurgery/BreastReductionPageComponent'
import { BreastRevisionPageComponent } from './collections/plasticSurgery/BreastRevisionPageComponent'
import { BodyPageComponent } from './collections/plasticSurgery/BodyPageComponent'
import { LiposuctionPageComponent } from './collections/plasticSurgery/LiposuctionPageComponent'
import { MommyMakeoverPageComponent } from './collections/plasticSurgery/MommyMakeoverPage'
import { TummyTuckPageComponent } from './collections/plasticSurgery/TummyTuckPage'
import { Blog } from './collections/blog/Blog'
import { Locations } from './collections/providers/Locations'
import { Providers } from './collections/providers/Providers'
import { ProviderLocatorComponent } from './globals/ProviderLocatorComponent'
import { TrainingApplication } from './collections/traning/TrainingApplicationComponent'
import { TrainingApplicationSimpleComponent } from './collections/traning/TrainingApplicationSimpleComponent'
// import { FormSubmissions } from './collections/traning/FormSubmissions'
import { ClermontPageComponent } from './collections/locations/ClermontPageComponent'
import { ClearwaterPageComponent } from './collections/locations/ClearwaterPageComponent'
import { DowntownOrlandoPageComponent } from './collections/locations/DowntownOrlandoPageComponent'
import { DowntownTampaPageComponent } from './collections/locations/DowntownTampaPageComponent'
import { LakeMaryPageComponent } from './collections/locations/LakeMaryPageComponent'
import { LakeNonaPageComponent } from './collections/locations/LakeNonaPageComponent'
import { LongwoodPageComponent } from './collections/locations/LongwoodPageComponent'
import { MountDoraPageComponent } from './collections/locations/MountDoraPageComponent'
import { NewSmyrnaPageComponent } from './collections/locations/NewSmyrnaPageComponent'
import { OcalaLocationPageComponent } from './collections/locations/OcalaLocationPageComponent'
import { OrlandoLocationPageComponent } from './collections/locations/OrlandoLocationPageComponent'
import { PortOrangeLocationPageComponent } from './collections/locations/PortOrangeLocationPageComponent'
import { SarasotaLocationPageComponent } from './collections/locations/SarasotaLocationPageComponent'
import { StPetersburgLocationPageComponent } from './collections/locations/StPetersburgLocationPageComponent'
import { TampaLocationPageComponent } from './collections/locations/TampaLocationPageComponent'
import { VillagesLocationPageComponent } from './collections/locations/VillagesLocationPageComponent'
import { WesleyChapelLocationPageComponent } from './collections/locations/WesleyChapelLocationPageComponent'
import { WinterGardenLocationPageComponent } from './collections/locations/WinterGardenLocationPageComponent'
import { WinterParkLocationPageComponent } from './collections/locations/WinterParkLocationPageComponent'
import { SatelliteLocationsPageComponent } from './collections/locations/SatelliteLocationsPageComponent'
// import { ContactFormSubmissions } from './collections/contact/ContactFormSubmissions'
// import { ContactSection } from './collections/contact/ContactSection'
import { ContactComponent } from './collections/contact/ContactComponent'
import { FormSubmissions } from './collections/contact/FormSubmissions'
import { TrainingFormSubmissions } from './collections/traning/TrainingFormSubmissions'
import { SpecialContactFormSubmissions } from './collections/specialRewards/SpecialPageContact'

// import { lexicalEditor } from '@payloadcms/richtext-lexical'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    AboutHeroComponent,
    OurFoundersComponent,
    TestimonialsComponent,
    VideoGalleryComponent,
    ConfidentialityStatementComponent,
    GalleryComponent,
    NonSurgicalGalleryComponent,

    LipFillersPage,
    BotoxPage,
    JuvedermGallery,
    KybellaGallery,
    MicroChannelingGallery,
    RestylaneGallery,
    SkinMedicaGallery,
    DermanGalleryHero,
    CheekContourGallery,
    LiquidChinJawGallery,
    LiquidRhinoplastyGallery,
    MarionetteLineGallery,
    LiquidFaceliftGallery,
    WeightLossGallery,
    LashExtensionsGallery,

    SurgicalGalleryComponent,

    TummyTuckPage,
    MommyMakeoverGallery,
    LiposuctionGallery,
    BreastAugmentationGallery,
    BreastLiftGallery,

    MedicalSpaComponent,
    MedicalSpaInjectablesComponent,
    BotoxPageComponent,
    DysportPageComponent,
    DermalFillersPageComponent,
    JuvedermPageComponent,
    JuvedermVoluxPageComponent,
    RestylanePageComponent,
    RestylaneContourPageComponent,
    CheekFillersPageComponent,
    LinesAndWrinklesPageComponent,
    LipFillersPageComponent,
    ChinFillersPageComponent,
    HandRejuvenationPageComponent,
    LiquidFaceliftPageComponent,
    LiquidRhinoplastyPageComponent,
    SkinVivePageComponent,
    SpaServicesPageComponent,
    LashExtensionsPageComponent,
    MensServicesPageComponent,
    MicroChannelingPageComponent,
    PermanentMakeupPageComponent,
    DiamondGlowPageComponent,
    SkinMedicaPage,
    SkincareServicesPage,
    WeightLossPageComponent,
    SemaglutideInjectionsPageComponent,

    SpecialsRewardsPageComponent,
    SpecialsPageComponent,
    AlleRewardsPageComponent,
    AspireRewardsPageComponent,
    GiftCardsPageComponent,
    MedicalFinancingPageComponent,
    TrainingPageComponent,
    ProgramDetailsComponent,
    ComprehensiveProgramComponent,
    FoundationalProgramComponent,
    // TrainingApplicationComponent,
    TrainingApplicationSimpleComponent,
    // FormSubmissions,

    PlasticSurgeryPageComponent,
    BreastPageComponent,
    BreastAugmentationPageComponent,
    BreastLiftPageComponent,
    BreastReductionPageComponent,
    BreastRevisionPageComponent,
    BodyPageComponent,
    LiposuctionPageComponent,
    MommyMakeoverPageComponent,
    TummyTuckPageComponent,

    Blog,

    Locations,
    Providers,

    ClermontPageComponent,
    ClearwaterPageComponent,
    DowntownOrlandoPageComponent,
    DowntownTampaPageComponent,
    LakeMaryPageComponent,
    LakeNonaPageComponent,
    LongwoodPageComponent,
    MountDoraPageComponent,
    NewSmyrnaPageComponent,
    OcalaLocationPageComponent,
    OrlandoLocationPageComponent,
    PortOrangeLocationPageComponent,
    SarasotaLocationPageComponent,
    StPetersburgLocationPageComponent,
    TampaLocationPageComponent,
    VillagesLocationPageComponent,
    WesleyChapelLocationPageComponent,
    WinterGardenLocationPageComponent,
    WinterParkLocationPageComponent,
    SatelliteLocationsPageComponent,

    // PlasticSurgeryComponent,
    // BreastPageComponent,
    // BreastAugmentationComponent,

    // ContactFormSubmissions,
    // ContactSection,

    ContactComponent,
    FormSubmissions,

    TrainingFormSubmissions,
    TrainingApplication,
    SpecialContactFormSubmissions,
  ],
  globals: [Navbar, Home, ProviderLocatorComponent],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  cors: ['http://localhost:3000', 'https://goldfingerbackends.vercel.app'],
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
