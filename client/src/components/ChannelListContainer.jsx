import { ChannelList, useChatContext } from "stream-chat-react";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./exportHandler";
import { AiFillHome } from 'react-icons/ai';
import { RiLogoutBoxFill } from 'react-icons/ri';


const SideBar = () => (
    
        <div className="channel-list__sidebar">
            <div className="channel-list__sidebar__icon1">
                <div className="icon1__inner">
                    <AiFillHome style={{marginBottom: '1rem',fontSize: '1.49rem'}}/>
                </div>
                <div className="icon1__inner">
                    <RiLogoutBoxFill style={{marginBottom: '1rem', fontSize: '1.49rem'}}/>
                </div>
            </div>
        </div>
)
const CompanyHeader = () => (
    <div className="channel-list__header">
        <p>BuzzChat</p>
    </div>
)


const ChannelListContainer = () => {
    return ( 
        <>    
            <SideBar />
            <div className="channel__list__container">
                <CompanyHeader />
                <ChannelSearch />
                <ChannelList 
                filters={{}}
                channelRenderFilterFn={() => {}}
                List={(listProps) => {
                    <TeamChannelList 
                     { ...listProps}
                     type='team'
                    />
                }}
                Preview={(previewProps) => {
                    <TeamChannelPreview 
                    { ...previewProps}
                    type='team'
                    />
                }}
                />
                <ChannelList 
                filters={{}}
                channelRenderFilterFn={() => {}}
                List={(listProps) => {
                    <TeamChannelList 
                     { ...listProps}
                     type='messaging'
                    />
                }}
                Preview={(previewProps) => {
                    <TeamChannelPreview 
                    { ...previewProps}
                    type='messaging'
                    />
                }}
                />
            </div>
        </>
     );
}
 
export default ChannelListContainer;