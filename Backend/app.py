# Needed Imports 
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

def translateWord(txt, lang):
    # Settings for Chrome / driver
    options = Options()
    options.add_experimental_option("detach", True)
    options.add_argument('--headless')
    
    driver = webdriver.Chrome(options=options)
    driver.maximize_window()
    
    
    # Sets language  
    driver.get(f"https://translate.google.com/?sl=auto&tl={lang}&text=&op=translate")
    
    #Inputs text into Class container 'er8xn'
    input_box = WebDriverWait(driver, 10).until( 
        EC.presence_of_element_located((By.CLASS_NAME, 'er8xn'))
    )
    input_box.send_keys(txt)

    #Gets text from class container 'ryNqvb'
    translated_text_element = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.CLASS_NAME, 'ryNqvb'))
    )
    translation = translated_text_element.text

    driver.quit()
    return translation 

#Post method 
@app.route('/getTranslation', methods=['POST'])  
def getText():
    data = request.get_json()
    text = data['text']
    language = data['language']
    translatedText = translateWord(text, language)

    return jsonify({"message": f"{translatedText}"})

if __name__ == '__main__':
    app.run(port=5000)  
