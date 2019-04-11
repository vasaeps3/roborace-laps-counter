import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RobotList from './components/RobotList'
import { subscribeToServer } from './connectorToBase';
import { Button } from '@salesforce/design-system-react';
import IconSettings from '@salesforce/design-system-react/lib/components/icon-settings';
import GlobalHeader from '@salesforce/design-system-react/lib/components/global-header'; 
import GlobalHeaderButton from '@salesforce/design-system-react/lib/components/global-header/button';
import GlobalHeaderDropdown from '@salesforce/design-system-react/lib/components/global-header/dropdown';
import Card from '@salesforce/design-system-react/lib/components/card';

class App extends Component {

    state = {
        robots : [
            {id : 1, laps : 0, name : 'SUBARU1'},
            {id : 2, laps : 0, name : 'SUBARU2'},
            {id : 3, laps : 0, name : 'SUBARU3'},
            {id : 4, laps : 0, name : 'SUBARU4'},
            {id : 5, laps : 0, name : 'SUBARU5'},
            {id : 6, laps : 0, name : 'SUBARU6'}
        ],
        race : {
            state : 'STOPPED'
        },
        timestamp: 'no timestamp yet'
    }

    onMessage = (message) => {
        console.log('message');
    };

    onError = (error) => {
        console.log('error');
    };

    onClose = (close) => {
        console.log('close');
    };

    onOpen = (open) => {
        console.log('open');
    };

    constructor(props) {
        super(props);
        subscribeToServer(this.onMessage, this.onError, this.onClose, this.onOpen);
    }


    render() {
        return (
        <div id="root">
            <IconSettings iconPath="/icons">
                <div className="slds-grid slds-grid_vertical">
                    <GlobalHeader
                        logoSrc="/logo.jpg"
                        onSkipToContent={() => {
                            console.log('>>> Skip to Content Clicked');
                        }}
                        onSkipToNav={() => {
                            console.log('>>> Skip to Nav Clicked');
                        }}
                    >
                        <GlobalHeaderDropdown
                            assistiveText={{ icon: 'Global Actions' }}
                            id="global-header-dropdown-example"
                            iconCategory="utility"
                            iconName="add"
                            onSelect={() => {
                                console.log('>>> onSelect');
                            }}
                            options={[{ label: 'New Note' }, { label: 'Log a Call' }]}
                        />
                        <GlobalHeaderButton
                            assistiveText={{ icon: 'Help and Training' }}
                            iconCategory="utility"
                            iconName="question"
                            onClick={() => {
                                console.log('>>> onClick');
                            }}
                        />
                        <GlobalHeaderButton
                            assistiveText={{ icon: 'Setup' }}
                            iconCategory="utility"
                            iconName="settings"
                            onClick={() => {
                                console.log('>>> onClick');
                            }}
                        />
                    </GlobalHeader>
                    
                    <div class="slds-grid slds-grid_vertical-align-center slds-grid_align-center" >
                        <Card
                            id="settingsCard"
                            heading="Releated Items"
                            headerActions={
                                (
                                    <Button
                                        label="Delete All Items"
                                        onClick={this.handleDeleteAllItems}
                                    />
                                )
                            }
                        >
                            sdsdsdsdsd
                        </Card>
                    </div>
                </div>
            </IconSettings>
            
            <Button label="Settings" variant="brand"/>
            
        </div>
        );
    }
}

export default App;
