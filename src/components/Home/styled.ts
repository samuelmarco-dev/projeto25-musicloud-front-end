import styled from "styled-components";
import Wallpaper from "../../images/wallpaper.jpg";

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: black;
    overflow-y: hidden;
`;

export const Header = styled.header`
    width: 100%;
    height: 10vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(30, 30, 30, 0.9);

    h1 {
        font-family: 'Rubik', sans-serif;
        font-weight: 600;
        font-size: 30px;
        line-height: 38.73px;
        text-shadow: 4px 0px 10px black;
        color: white;
    }
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    div {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p {
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 35px;
            padding: 0 16px;
            font-weight: 700;
            font-size: 18px;
            text-align: center;
            color: white;
            z-index: 2;
        }

        button {
            width: 70%;
            height: 40px;
            border-radius: 24px;
            font-size: 15px;
            font-weight: 400;
            line-height: 20px;
            text-align: center;
            background-color: #45DD7B;
            z-index: 2;
        }
    }
`;

export const WallpaperImage = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 10vh;
    left: 0;
    right: 0;
    background-image: url(${Wallpaper});
    opacity: 30%;
    filter: blur(3px);
    z-index: 1;
`;
