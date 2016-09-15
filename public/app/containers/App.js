/**
 * Created by llan on 2016/6/8.
 */
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import { Link } from 'react-router';
const styles = {
  iconStyles: {
    marginRight: '24px'
  }
};
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <FontIcon className="material-icons" style={styles.iconStyles}>
              <Link style={styles.linkStyle} to="/">home</Link>
            </FontIcon>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle text="Amwares"/>
            <ToolbarSeparator />
            <IconMenu
              iconButtonElement={
                <IconButton>
                    <FontIcon className="material-icons">
                        filter_list
                    </FontIcon>
                </IconButton>
              }
              anchorOrigin={{
                horizontal: 'right',
                vertical: 'top'
              }}
              targetOrigin={{
                horizontal: 'right',
                vertical: 'top'
              }}
            >
            <MenuItem primaryText={
              <Link style={styles.linkStyle} to="/">Home</Link>
            }/>
            <MenuItem primaryText={<Link style={styles.linkStyle} to="/children" >Children</Link>
            }/>
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
          {this.props.children}
    </div>
    );
  }
}
