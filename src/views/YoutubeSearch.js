import './Blog.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';
import moment from 'moment';

const YoutubeSearch = () => {
    const [videos, setVideos] = useState([]);
    const [query, setQuery] = useState('');

    const handleSearchYoutube = async () => {
        let res = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            "params": {
                'part': 'snippet',
                'maxResults': '20',
                'key': 'AIzaSyB0aU_aF0-rQcMFra4uKP0SyDobfQ5Itqo',
                type: 'video',
                'q': query
            }
        });
        if (res && res.data && res.data.items) {
            let raw = res.data.items;
            console.log('raw', raw);
            let result = [];
            if (raw && raw.length > 0) {
                raw.map(item => {
                    let obj = {};
                    obj.id = item.id.videoId
                    obj.title = item.snippet.title
                    obj.createAt = item.snippet.publishedAt
                    obj.author = item.snippet.channelTitle
                    obj.description = item.snippet.description
                    result.push(obj);
                });

            }
            setVideos(result);
            console.log('videos', videos);
        }
    }


    return (
        <div className='youtube-search-container'>
            <input type="text" placeholder="Nhập từ khóa"
                value={query} onChange={(event) => setQuery(event.target.value)}
            />
            <button type="button" onClick={handleSearchYoutube}>Tìm kiếm</button>
            {videos && videos.length > 0 &&
                videos.map((item, index) => {
                    return (
                        <div className='yt-result' key={item.id}>
                            <div className='left'>
                                <iframe className='yt-video'
                                    src={`https://www.youtube.com/embed/${item.id}`}
                                    title="Youtube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                                </iframe>
                            </div>
                            <div className='right'>
                                <div className='title'>
                                    {item.title}
                                </div>
                                <div className='create-at'>
                                    Create at: {moment(item.createAt).format('DD-MM-YYYY HH:mm:ss')}
                                </div>
                                <div className='author'>
                                    Author: {item.author}
                                </div>
                                <div className='description'>
                                    Mô tả: {item.description}
                                </div>
                            </div>

                        </div>)
                })
            }

        </div>

    );
}

export default YoutubeSearch;