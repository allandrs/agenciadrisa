import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

import Delivery from "../../public/delivery bebidas.png";
import Portfolio from "../../public/portfolio.png";
import PSG from "../../public/LP-PSG.png";
import Finances from "../../public/finances.png";
import Dark from "../../public/loginDark.png";

import CardCarousel from "./cardCarousel"

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;


  return (
    <div style={{padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={20}
        leftChevron={<button className='bg-white rounded-full w-6'>{'<'}</button>}
        rightChevron={<button className='bg-white rounded-full w-6'>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
		    infiniteLoop={true}
      >
        <CardCarousel img={Delivery} link={'https://allandrs.github.io/delivery_bebidas/'}/>
        {/* <CardCarousel img={Portfolio} link={'https://allandrs.github.io/portfolio-html-css/'}/> */}
        {/* <CardCarousel img={PSG} link={'https://allandrs.github.io/site-futebol/'}/> */}
        <CardCarousel img={Finances} link={'https://allandrs.github.io/sistema-controle-financeiro/'}/>
        <CardCarousel img={Dark} link={'https://allandrs.github.io/tela-login-dark/'}/>
      </ItemsCarousel>
    </div>
  );
}
