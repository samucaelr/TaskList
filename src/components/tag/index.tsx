import { tagList } from "../../utils/tag"


function Tag({name}:{name: string}) {

  const tag = tagList.filter((tag) => tag.name === name)[0] ?? {color: 'black', bgColor: 'white'}
  const {color, bgColor} = tag
  return (
    <div 
      className='border rounded-full px-2 text-sm font-bold' 
      style={{
        backgroundColor: bgColor,
        color: color
      }}>
      {name}
    </div>
  )
}

export default Tag
