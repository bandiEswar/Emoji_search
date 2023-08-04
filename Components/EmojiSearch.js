import React,{useState} from 'react'
 const emojiData=[
  {
    id:1,
    symbol:"😊",
    name:"Happy"
  },
  {
    id:2,
    symbol:"😢",
    name:"Sad"
  },
  {
    id:3,
    symbol:"❤",
    name:"love"
  },
  {
    id:4,
    symbol:"😁",
    name:"Smile"
  },
  {
    id:5,
    symbol:"✌",
    name:"victory"
  },
  {
    id:6,
    symbol:"🤞",
    name:"Fingers Cross"
  },
  {
    id:7,
    symbol:"😎",
    name:"cool"
  },
  {
    id:8,
    symbol:"😴",
    name:"Sleepy"
  },
  {
    id:9,
    symol:"🤩",
    name:"Happy-face-with-star-eyes"
  },
  {
    id:10,
    symbol:"🤯",
    name:"Mind-Denging"
  },
  
 ]
function EmojiSearch() {
    const [searchEmoji,setSearchEmoji] = useState("");
   
    const handleChange = (e) =>{
        setSearchEmoji(e.target.value);
    }

    const showEmoji = emojiData.filter((emoji) => {
        const emojiName = emoji.name.toLowerCase();
        return emojiName.includes(searchEmoji.toLowerCase())

    });
  return (
    <div>
        <h1>React Emoji Search App!!!!</h1>
        <input type='text' placeholder='Search the Emoji..!!' value={searchEmoji} onChange={handleChange}></input>
        <div>{
            showEmoji.map((emoji) => emoji.symbol)}
        </div>
        </div>
  )
}

export default EmojiSearch