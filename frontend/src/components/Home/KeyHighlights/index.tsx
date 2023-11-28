import { HighlightContent } from './HighlightContent'
import ContentSection from '../ContentSection'
import { KeyHighlightConfig } from '../../../configs/Home/KeyHighlightConfig'

export const KeyHighlight = () => {
  return (
    <div className='bg-dotted-pattern'>
      <ContentSection title={KeyHighlightConfig.title}
        subTitle={KeyHighlightConfig.subTitle}
        tagLine={KeyHighlightConfig.tagLine}
        content={<HighlightContent />}
      />
    </div>
  )
}
