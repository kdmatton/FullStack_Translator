import './App.css'
import React, { useState } from 'react'

function App() {
  const[text, setText] = useState('')
  const[language, setLanguage] = useState('')
  const[translatesText, setTranslatedText] = useState('Nothing has been Translated Yet!')

  const handleText = (event) => {
    setText(event.target.value)
  } 

  const handleLanguage = (event) => {
    setLanguage(event.target.value)
  }

  const translate = async () => {
    try {
      // Send a POST request as json['text'] format
      const response = await fetch('http://127.0.0.1:5000/getTranslation', {
        method: 'POST',  
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({ text, language }),  
      })
  
      // Parse the JSON response
      const data = await response.json();
      setTranslatedText(data.message) 
    } 
    catch (error) {
      // if error occurs for post
      console.error("Error sending data:", error)
      alert("Failed to send data. Please try again.")
    }
  }

  return (
    <div>
      <input 
      placeholder="Enter text"
      type = "text"
      value = {text}
      onChange={handleText}
      /> 
      <button onClick={translate}> Translate Text </button>
      <select value={language} onChange={handleLanguage}>
        <option value="" disabled>Select Language</option>
        <option value="af">Afrikaans</option>
        <option value="sq">Albanian</option>
        <option value="am">Amharic</option>
        <option value="ar">Arabic</option>
        <option value="hy">Armenian</option>
        <option value="as">Assamese</option>
        <option value="ay">Aymara</option>
        <option value="az">Azerbaijani</option>
        <option value="bm">Bambara</option>
        <option value="eu">Basque</option>
        <option value="be">Belarusian</option>
        <option value="bn">Bengali</option>
        <option value="bho">Bhojpuri</option>
        <option value="bs">Bosnian</option>
        <option value="bg">Bulgarian</option>
        <option value="ca">Catalan</option>
        <option value="ceb">Cebuano</option>
        <option value="zh-CN">Chinese (Simplified)</option>
        <option value="zh-TW">Chinese (Traditional)</option>
        <option value="co">Corsican</option>
        <option value="hr">Croatian</option>
        <option value="cs">Czech</option>
        <option value="da">Danish</option>
        <option value="dv">Dhivehi</option>
        <option value="doi">Dogri</option>
        <option value="nl">Dutch</option>
        <option value="en">English</option>
        <option value="eo">Esperanto</option>
        <option value="et">Estonian</option>
        <option value="ee">Ewe</option>
        <option value="fil">Filipino (Tagalog)</option>
        <option value="fi">Finnish</option>
        <option value="fr">French</option>
        <option value="fy">Frisian</option>
        <option value="gl">Galician</option>
        <option value="ka">Georgian</option>
        <option value="de">German</option>
        <option value="el">Greek</option>
        <option value="gn">Guarani</option>
        <option value="gu">Gujarati</option>
        <option value="ht">Haitian Creole</option>
        <option value="ha">Hausa</option>
        <option value="haw">Hawaiian</option>
        <option value="he">Hebrew</option>
        <option value="hi">Hindi</option>
        <option value="hmn">Hmong</option>
        <option value="hu">Hungarian</option>
        <option value="is">Icelandic</option>
        <option value="ig">Igbo</option>
        <option value="ilo">Ilocano</option>
        <option value="id">Indonesian</option>
        <option value="ga">Irish</option>
        <option value="it">Italian</option>
        <option value="ja">Japanese</option>
        <option value="jv">Javanese</option>
        <option value="kn">Kannada</option>
        <option value="kk">Kazakh</option>
        <option value="km">Khmer</option>
        <option value="rw">Kinyarwanda</option>
        <option value="gom">Konkani</option>
        <option value="ko">Korean</option>
        <option value="kri">Krio</option>
        <option value="ku">Kurdish</option>
        <option value="ckb">Kurdish (Sorani)</option>
        <option value="ky">Kyrgyz</option>
        <option value="lo">Lao</option>
        <option value="la">Latin</option>
        <option value="lv">Latvian</option>
        <option value="ln">Lingala</option>
        <option value="lt">Lithuanian</option>
        <option value="lg">Luganda</option>
        <option value="lb">Luxembourgish</option>
        <option value="mk">Macedonian</option>
        <option value="mai">Maithili</option>
        <option value="mg">Malagasy</option>
        <option value="ms">Malay</option>
        <option value="ml">Malayalam</option>
        <option value="mt">Maltese</option>
        <option value="mi">Maori</option>
        <option value="mr">Marathi</option>
        <option value="mni-Mtei">Meiteilon (Manipuri)</option>
        <option value="lus">Mizo</option>
        <option value="mn">Mongolian</option>
        <option value="my">Myanmar (Burmese)</option>
        <option value="ne">Nepali</option>
        <option value="no">Norwegian</option>
        <option value="ny">Nyanja (Chichewa)</option>
        <option value="or">Odia (Oriya)</option>
        <option value="om">Oromo</option>
        <option value="ps">Pashto</option>
        <option value="fa">Persian</option>
        <option value="pl">Polish</option>
        <option value="pt">Portuguese (Portugal, Brazil)</option>
        <option value="pa">Punjabi</option>
        <option value="qu">Quechua</option>
        <option value="ro">Romanian</option>
        <option value="ru">Russian</option>
        <option value="sm">Samoan</option>
        <option value="sa">Sanskrit</option>
        <option value="gd">Scots Gaelic</option>
        <option value="nso">Sepedi</option>
        <option value="sr">Serbian</option>
        <option value="st">Sesotho</option>
        <option value="sn">Shona</option>
        <option value="sd">Sindhi</option>
        <option value="si">Sinhala (Sinhalese)</option>
        <option value="sk">Slovak</option>
        <option value="sl">Slovenian</option>
        <option value="so">Somali</option>
        <option value="es">Spanish</option>
        <option value="su">Sundanese</option>
        <option value="sw">Swahili</option>
        <option value="sv">Swedish</option>
        <option value="tl">Tagalog (Filipino)</option>
        <option value="tg">Tajik</option>
        <option value="ta">Tamil</option>
        <option value="tt">Tatar</option>
        <option value="te">Telugu</option>
        <option value="th">Thai</option>
        <option value="ti">Tigrinya</option>
        <option value="ts">Tsonga</option>
        <option value="tr">Turkish</option>
        <option value="tk">Turkmen</option>
        <option value="ak">Twi (Akan)</option>
        <option value="uk">Ukrainian</option>
        <option value="ur">Urdu</option>
        <option value="ug">Uyghur</option>
        <option value="uz">Uzbek</option>
        <option value="vi">Vietnamese</option>
        <option value="cy">Welsh</option>
        <option value="xh">Xhosa</option>
        <option value="yi">Yiddish</option>
        <option value="yo">Yoruba</option>
        <option value="zu">Zulu</option>
      </select>

      <div className='text-box'> 
      {translatesText}
      </div>
    </div>

  );
}

export default App
