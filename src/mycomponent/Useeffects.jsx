import React, {useEffect, useState} from 'react'

export default function UseEffect(props) {
        const [wordlength, setwordlength] = useState(0)
        const [characterlength, setcharacterlength] = useState(0)
        const [currenttext, setcurrenttext] = useState(" ")
        let currtext = " "

        useEffect(() => { 
            currtext = currenttext.trim()

            setcharacterlength (currtext.split(' ').join('').length)
            if (characterlength == 0){
                setwordlength(0)
            }
            else{
            setwordlength( currtext.split(' ').length )
            }
            currtext = ""

        } )

        function uppercase() {
            currtext = currenttext
            setcurrenttext(currtext.toUpperCase())
        
        }
        function lowercase() {
            currtext = currenttext
            setcurrenttext(currtext.toLowerCase())
    
    }       
        function cleartext() {
            document.getElementsByTagName("textarea")[0].value = ""
            setcurrenttext(" ")

}

        
  return (

    <>
        <br />
        <h1 style={{marginLeft : "10vw", fontFamily : "sans-serif", fontSize : "30px", color :"red"}}>{props.name}</h1>
        <br />
        <textarea  id="" cols="30" rows="10" type="text"  placeholder = "please type your text"   style={{ width : "80vw", height : "20vh", marginLeft : "10vw"}} onChange={(e) => {setcurrenttext(e.target.value)}}></textarea>
        <br />
        <br />
        <button className='btn btn-info' style={{marginLeft : "10vw", marginRight :"5vw"  }} onClick={uppercase}> UPPERCASE</button>
        <button className='btn btn-success'style={{marginLeft : "5vw", marginRight :"5vw"  }} onClick={lowercase}>lowercase</button>
        <button className='btn btn-danger'style={{marginLeft : "5vw", marginRight :"5vw"  }} onClick={cleartext}>Clear text</button>
        <br />
        <br />
        <h1 style={{marginLeft : "10vw"}}>You Text Summary</h1>
        <br />
        <h3 style={{marginLeft : "10vw"}}>{wordlength} words, {characterlength} character</h3>
        <br />
        <h1 style={{marginLeft : "10vw"}}>Preview</h1>
        <br />
        <h3 style={{marginLeft : "10vw"}}>{currenttext}</h3>
    </>
  )
}                                                                             
