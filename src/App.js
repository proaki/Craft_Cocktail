/** @jsxImportSource @emotion/react */
// https://dribbble.com/shots/2955075-Neon-Sign-in-CSS

import React, {useEffect, useState, useCallback} from 'react';
import cocktails from './dataset.json';
import { FormDialog } from './components/index';
import './App.css';

const Cocktails = cocktails.cocktails;


const App = () => {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState();     
  

    const handleOpen = useCallback(() => {
      setOpen(true)
    },[setOpen]);
    
    const handleClose = useCallback(() => {
      setOpen(false)
    },[setOpen]);    
            
    const handleClick = () => {
      switcher()
    }

    
    const switcher = (e) => {
        setOpen(!open)        
        const eve = e || window.event;
        const elem = eve.target || eve.srcElement;
        const elemId = elem.id;        

        let cocktail_array = [];
        for (let i = 0; i < Cocktails.length; i++) {
          cocktail_array.push(Math.random());
        }              
        let atRandom = Cocktails.sort(function (a, b) {
          return cocktail_array[Cocktails.indexOf(a)] - cocktail_array[Cocktails.indexOf(b)];
        })      

        for(let item of atRandom){
            let STRING = 'カクテル名 : ' + item["cocktail_name"] + '\n' +
                          'テイスト : ' + item["taste_name"] + '\n' +
                          'アルコール度数 : ' + item["alcohol"] + '\n' +
                          '作り方 : ' + '\n' + item["recipe_desc"] + '\n'

            switch(elemId){
                case("1"):            
                    if(item["taste_name"] === "甘口") {  
                      setSelect(
                      STRING.split('\n').map(str => {
                        console.log({str})
                        return(<p>{str}</p>)
                      }))
                      setMessage()
                    } else {
                      setSelect()
                      setMessage("No Data...")
                    } 
                break; 

                case("2"):            
                    if(item["taste_name"] === "中甘口") {  
                      setSelect(
                      STRING.split('\n').map(str => {
                        console.log({str})
                        return(<p>{str}</p>)                        
                      }))
                      setMessage()
                    }      
                break;    

                case("3"):            
                    if(item["taste_name"] === "中口") {  
                      setSelect(
                      STRING.split('\n').map(str => {
                        console.log({str})
                        return(<p>{str}</p>)
                      }))
                      setMessage()
                    }     
                break;  

                case("4"):            
                    if(item["taste_name"] === "中辛口") {
                      setSelect(
                      STRING.split('\n').map(str => {
                        console.log({str})
                        return(<p>{str}</p>)
                      }))
                      setMessage()
                    }
                break;
                
                case("5"):            
                    if(item["taste_name"] === "辛口") {
                      setSelect(
                      STRING.split('\n').map(str => {
                        console.log({str})
                        return(<p>{str}</p>)
                      }))
                      setMessage()
                    }
                break;                
            }        
      }
    }
         
      
      return (
          <div className="main_container">
              <div className="title_container">
                  <h1 className="open_title" contenteditable spellcheck="false">Craft<br/> Cocktails</h1>
                  <div class="logo"><b>Select <span> Co</span>cktail <span> Ta</span>ste</b></div>                  
              </div>

              <FormDialog
                  select={select}
                  open={open} 
                  handleOpen={handleOpen} 
                  handleClose={handleClose}
                  message={message}
              />

              <div className="button_list_container">
                  <ul className="button_list">
                      <button
                        className="taste_button"
                        id="1"
                        onClick = { () => {
                          handleClick(); 
                        }}
                      >
                        Sweet
                      </button>

                      <button
                        className="taste_button"
                        id="2"
                        onClick={handleClick}
                      >
                        Medium Sweet
                      </button>

                      <button
                        className="taste_button"
                        id="3"
                        onClick={handleClick}
                      >
                        Medium
                      </button>

                      <button
                        className="taste_button"
                        id="4"
                        onClick={handleClick}
                      >
                        Medium Dry
                      </button>

                      <button
                        className="taste_button"
                        id="5"
                        onClick={handleClick}
                      >
                        Dry
                      </button>              
                  </ul>
              </div>              
          </div>
        );
    }

export default App;