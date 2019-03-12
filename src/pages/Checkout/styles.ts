import { createStyles } from '@material-ui/core/styles';

export default createStyles({
   app: {
      width: '100%',
      height: '100%',
   },
   appHeader: {
      height: '70px',
      width: '100%',
      padding: '0px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px #f0f0f0 solid',
   },
   appSelect: {
      marginLeft: '16px',
   },
   appWrapper: {
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      display: 'flex',
   },
   appCart: {
      position: 'relative',
      width: '450px',
      height: '100%',
      borderRight: '1px #f0f0f0 solid',
   },
   appCartItems: {
      maxHeight: '800px',
      overflowY: 'auto',
   },
   appCartTotal: {
      position: 'fixed',
      bottom: '16px',
      left: '16px',
   },
   appProducts: {
      width: '100%',
      height: '100%',
      padding: '16px',
      backgroundColor: '#f5f5f5',
   },
});