import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import {Theme, WithStyles, createStyles, withStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import {mainListItems, secondaryListItems} from './sidebar/index';

const drawerWidth = 240;

const styles = ({mixins, palette, spacing}: Theme) =>
  createStyles({
    appBar: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
    },
    content: {
      backgroundColor: palette.background.default,
      flexGrow: 1,
      padding: spacing.unit * 3,
    },
    drawer: {
      flexShrink: 0,
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: 'flex',
    },
    toolbar: mixins.toolbar,
  });

interface Props extends WithStyles<typeof styles> {}

class Dashboard extends React.Component<Props, {}> {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              View Animals
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
          <Typography variant="caption" gutterBottom>{`Version: ${process.env.NODE_ENV}`}</Typography>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
