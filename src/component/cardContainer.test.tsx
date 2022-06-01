import React from "react"
import {  render } from '@testing-library/react';
import {CardsContainer}  from "./cardsContainer"

test("renders card component",()=>{

    const { getByTestId } = render(<CardsContainer data={[{img:"abc",name:"abc",appearance:[0,0],birthday:"",char_id:0,nickname:"",status:"",portrayed:"",category:"",occupation:[""]}]}/>)

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const card = getByTestId("card")
    expect(card).toBeDefined()
    
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const characterName = getByTestId("characterName")
    expect(characterName).toBeDefined()
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const characterImg = getByTestId("characterImg")
    expect(characterImg).toBeDefined()
})


