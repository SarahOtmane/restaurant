import AnimatedCursor from "react-animated-cursor";

function Animation(){
    return(
        <AnimatedCursor
            innerSize={8}
            outerSize={46}
            color='255, 255, 255'
            outerAlpha={0.4}
            innerScale={0.7}
            outerScale={5}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link',
                'div[class="swiper-button-prev"]',
                'div[class="swiper-button-next"]'
            ]}
        />
    )
}

export default Animation;