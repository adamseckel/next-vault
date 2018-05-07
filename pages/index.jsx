import React, { Component } from 'react'
// import injectTapEventPlugin from 'react-tap-event-plugin'
import styled from 'react-emotion'
import getConfig from 'next/config'
// import firebase from 'firebase'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import FlatButton from 'material-ui/FlatButton'
import { muiThemeDeclaration } from '../components/styleguide'
import {
  InventoryGrid,
  SnackbarContainer,
  LocationsRow,
  TopBar,
} from '../components'
import Reducer from '../components/Reducer'
import { Manifest } from '../services'

const muiTheme = getMuiTheme(muiThemeDeclaration)

const StyledTopBar = styled(TopBar)`
  position: fixed !important;
  top: 0 !important;
`

const StyledSnackbarContainer = styled(SnackbarContainer)`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 300;
`

const SignInButton = styled(FlatButton)`
  span {
    font-size: 16px !important;
  }
`
const { CLIENT_ID, APIKEY, CLIENT_SECRET } = {
  CLIENT_ID: '23739',
  APIKEY: '903ab7405fc642f69ec01311da0e2469',
  CLIENT_SECRET: 'Y0.XJITwGaIofuQhZCfOU0ZjGA6Ie4NkErY8Z-uEUq0',
}
const apiKey =
  process.env.NODE_ENV === 'production'
    ? {
        client_id: CLIENT_ID,
        key: APIKEY,
        client_secret: CLIENT_SECRET,
      }
    : {
        client_id: '13756',
        key: '43e0503b64df4ebc98f1c986e73d92ac',
        client_secret: 'm7aOvxvaLgAfeLkT4QC6mg1fyl81iZBt5ptzkq4Pay0',
      }

console.log(apiKey)

class App extends Component {
  static async getInitialProps({ req }) {
    const manifest = Manifest
    return { manifest }
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <Reducer apiKey={apiKey} manifest={this.props.manifest}>
            {({ store, actions }) => (
              <div>
                <StyledTopBar
                  searchForItem={actions.searchForItem}
                  authenticated={true}
                  onReload={actions.onReload}
                  onLogout={actions.onLogout}
                  onAuthorize={actions.onAuthorize}
                  destinyAccounts={store.membership.destinyMemberships}
                  selectedAccount={store.destinyMembership}
                  handleAccountChange={actions.handleAccountChange}
                  query={store.query}
                  onFeedback={actions.onFeedback}
                  SignInButton={SignInButton}
                />

                <div>
                  <LocationsRow
                    characters={store.characters}
                    vault={store.vault}
                  />
                  <InventoryGrid
                    moveItem={actions.moveItem}
                    getItemDetail={actions.getItemDetail}
                    vaultColumns={store.vaultColumns}
                    characters={store.charactersByID}
                    clientWidth={store.clientWidth}
                    clientXY={store.clientXY}
                    items={store.items}
                    statsDefinitions={store.statsDefinitions}
                    perksDefinitions={store.perksDefinitions}
                    startInventoryPolling={actions.startInventoryPolling}
                    stopInventoryPolling={actions.stopInventoryPolling}
                    query={store.query}
                  />
                </div>

                <StyledSnackbarContainer messages={store.notifications} />
              </div>
            )}
          </Reducer>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
