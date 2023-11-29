import ContentSection from '../ContentSection'
import ServiceConfig from '../../../configs/Home/ServiceConfig'
import { ServiceContent } from './ServiceContent'

export const Services = () => {
  return (
    <div className='bg-moksha-gray' id='services'>
      <ContentSection
        title={ServiceConfig.title}
        subTitle={ServiceConfig.subTitle}
        tagLine={ServiceConfig.tagLine}
        content={<ServiceContent />}
      />
    </div>
  )
}
