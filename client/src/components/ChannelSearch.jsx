import { useState, useEffect } from "react";
import { useChatContext } from "stream-chat-react";
import { ImSearch } from "react-icons/im"


const ChannelSearch = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const onSearch = (e) => {
        e.preventDefault();
        setLoading(true)
        setQuery(e.target.value);
        getChannels(e.target.value)
    }
    const getChannels = async (text) => {
        try {
            //TODO: fetch channels
        } catch (error) {
            setQuery('')
        }
    }

    return ( 
        <div className="channel-search__container">
            <div className="channel-search__input__wrapper">
                <div className="channel-search__input__icon">
                    <ImSearch />
                </div>
                <input 
                    type="text" 
                    className="channel-search__input__text"
                    placeholder="Search" 
                    value={query} 
                    onChange={onSearch} 
                />
            </div>
        </div> 
    );
}
 
export default ChannelSearch;