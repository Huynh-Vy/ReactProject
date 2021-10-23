import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: "Nhẹ Nhàng Cùng V-Pop",
            thumbURL: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/2/a/8/22a85bcf0d4704e91bf89e2b513b05d2.jpg"
        },
        {
            id: 2,
            name: "K-Pop Perfect All-Kill",
            thumbURL: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/1/c/8/41c8eabf18ed75ebad308c9c4413d754.jpg"
        },
        {
            id: 3,
            name: "Nhạc Hoa Lời Việt Mới Nhất",
            thumbURL: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/e/5/3/7/e537224a5deb15294ec5b4eb05daeefc.jpg"
        },
        {
            id: 4,
            name: "Remix là phải Hit",
            thumbURL: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/3/9/b/9/39b95d19332ff9e2e81b75a6e2f70552.jpg"
        },
        {
            id: 5,
            name: "Anime Hits",
            thumbURL: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/3/3/e/433e00e7ee91ce36d73a64800a48a199.jpg"
        },
    ]

    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;