import React, { Component } from 'react'
import styled from 'react-emotion'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import FlatButton from 'material-ui/FlatButton'
import { muiThemeDeclaration } from '../components/styleguide'
import { Landing, TopBar } from '../components'
import Reducer from '../components/Reducer'

const muiTheme = getMuiTheme(muiThemeDeclaration)

const StyledTopBar = styled(TopBar)`
  position: fixed !important;
  top: 0 !important;
`

const SignInButton = styled(FlatButton)`
  span {
    font-size: 16px !important;
  }
`

const apiKey = {
  client_id: process.env.REACT_APP_CLIENT_ID || '13756',
  key: process.env.REACT_APP_APIKEY || '43e0503b64df4ebc98f1c986e73d92ac',
  client_secret:
    process.env.REACT_APP_CLIENT_SECRET ||
    'm7aOvxvaLgAfeLkT4QC6mg1fyl81iZBt5ptzkq4Pay0',
}

class Home extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Reducer apiKey={apiKey}>
          {({ store, actions }) => (
            <div>
              <StyledTopBar
                searchForItem={actions.searchForItem}
                authenticated={false}
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

              <Landing
                onAuthorize={actions.onAuthorize}
                SignInButton={SignInButton}
              />
            </div>
          )}
        </Reducer>
      </MuiThemeProvider>
    )
  }
}

export default Home
