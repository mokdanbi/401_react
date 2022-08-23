import { useRef, useState } from "react";
import { BsChevronBarUp } from "react-icons/bs";
const TopBanner = () => {
    const TopSpan = useRef(null);
    return (
        <>
            <div className="TopBanner" ref={TopSpan}>
                <h2>Lorem ipsum dolor sit. </h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br />
                    Soluta vitae voluptatem voluptatum quas vel incidunt?</p>
                <a href="" onClick={
                    (e) => {
                        e.preventDefault();
                    }
                }>more</a>
            </div>
            <span onClick={e => {
                e.currentTarget.classList.toggle('on');
                TopSpan.current.classList.toggle('on');
            }} className="btn">
                <BsChevronBarUp />
            </span>
        </>
    )
}

export default TopBanner;