import ContentSection from '../ContentSection'
import { AboutUsConfig } from '../../../configs/Home/AboutUsConfig'
import { AboutContent } from './AboutContent'

export const AboutUs = () => {
  return (
    <div className='bg-dotted-pattern'>
      <ContentSection
        title={AboutUsConfig.title}
        subTitle={AboutUsConfig.subTitle}
        tagLine={AboutUsConfig.tagLine}
        content={<AboutContent />}
      />
    </div>
  )
}
