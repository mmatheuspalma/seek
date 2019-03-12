import React, { Component } from 'react';
import { FormattedNumber } from 'react-intl';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core';

import CCheckout from 'classes/Checkout';

import { StateValueDefault } from 'helpers/constants';

import { IPromotion } from 'interfaces/Promotion';
import { IProduct } from 'interfaces/Product';

import * as Logo from 'assets/images/logo.jpg';

import Styles from './styles';

interface IProps {
   classes: any;
}

interface IStates {
   customer: string;
   promotions: Array<IPromotion>;

   checkout: CCheckout;
}

class Checkout extends Component<IProps, IStates> {
   constructor(props: IProps) {
      super(props);

      this.state = StateValueDefault;
   }

   public handleChangeCustomer = (e: any) => {
      this.setState({
         customer: e.target.value,
      }, () => {
         const promotion = this.state.promotions.find((promotion: IPromotion) => promotion.customer === this.state.customer);

         this.state.checkout.setPromotion(promotion).total();
         this.forceUpdate();
      });
   }

   public handleDeleteItem = (id: number) => {
      this.state.checkout.remove(id);
      this.state.checkout.total();

      this.forceUpdate();
   }

   public addItemToCart = (product: IProduct) => {
      this.state.checkout.add(product).total();

      this.forceUpdate();
   }

   public componentDidMount() {
      const promotion = this.state.promotions.find((promotion: IPromotion) => promotion.customer === this.state.customer);

      this.state.checkout.setPromotion(promotion).add({
         id: 'classic',
         name: 'classic',
         amount: 269.99,
      }).add({
         id: 'classic',
         name: 'classic',
         amount: 269.99,
      }).add({
         id: 'classic',
         name: 'classic',
         amount: 269.99,
      }).total();

      this.forceUpdate();
   }

   public render(): React.ReactNode {
      const {
         classes,
      } = this.props;

      return (
         <div className={classes.app}>
            <div className={classes.appHeader}>
               <img className={classes.appLogo} src={Logo}/>
               <FormControl className={classes.appSelect}>
                  <InputLabel htmlFor="customer">Customer</InputLabel>
                  <Select
                     value={this.state.customer}
                     onChange={this.handleChangeCustomer}
                     inputProps={{
                        name: 'customer',
                        id: 'customer',
                     }}
                     >
                     <MenuItem value='Default'>Default</MenuItem>
                     <MenuItem value={'UNILEVER'}>Unilever</MenuItem>
                     <MenuItem value={'APPLE'}>Apple</MenuItem>
                     <MenuItem value={'NIKE'}>Nike</MenuItem>
                     <MenuItem value={'FORD'}>Ford</MenuItem>
                  </Select>
               </FormControl>
            </div>
            <div className={classes.appWrapper}>
               <div className={classes.appCart}>
                  <Grid item>
                     <div className={classes.appCartItems}>
                        <List>
                           {
                              (this.state.checkout.cart.products)
                              && this.state.checkout.cart.products.map((product: IProduct, index: number) => (
                                 <ListItem key={index}>
                                    <ListItemText
                                       primary={product.name}
                                       secondary={<FormattedNumber style='currency' currency='BRL' value={product.amount}/>}
                                    />
                                    <ListItemSecondaryAction>
                                       <IconButton aria-label="Delete" onClick={() => this.handleDeleteItem(index)}>
                                          <DeleteIcon />
                                       </IconButton>
                                    </ListItemSecondaryAction>
                                 </ListItem>
                              ))
                           }
                        </List>
                     </div>
                  </Grid>
                  <div className={classes.appCartTotal}>
                     <Typography variant="h6">
                        Total amount <FormattedNumber style='currency' currency='BRL' value={this.state.checkout.cart.amount}/>
                     </Typography>
                     <div> Total discount <FormattedNumber style='currency' currency='BRL' value={this.state.checkout.cart.discount}/> </div>
                  </div>
               </div>
               <div className={classes.appProducts}>
                  <Card className={classes.card}>
                     <CardHeader
                        avatar={<Avatar aria-label="Recipe" className={classes.avatar}> C </Avatar>}
                        title="Classic ad"
                        action={<IconButton aria-label="Add" onClick={() => this.addItemToCart({id: 'classic', name: 'Classic Ad', amount: 269.99})}><CartIcon /></IconButton>}
                     />
                  </Card>
                  <br/>
                  <Card className={classes.card}>
                     <CardHeader
                        avatar={<Avatar aria-label="Recipe" className={classes.avatar}> S </Avatar>}
                        title="Standout ad"
                        action={<IconButton aria-label="Add" onClick={() => this.addItemToCart({id: 'standout', name: 'Standout Ad', amount: 322.99})}><CartIcon /></IconButton>}
                     />
                  </Card>
                  <br/>
                  <Card className={classes.card}>
                     <CardHeader
                        avatar={<Avatar aria-label="Recipe" className={classes.avatar}> P </Avatar>}
                        title="Premium ad"
                        action={<IconButton aria-label="Add" onClick={() => this.addItemToCart({id: 'premium', name: 'Premium Ad', amount: 394.99})}><CartIcon /></IconButton>}
                     />
                  </Card>
               </div>
            </div>
         </div>
      );
   }
}

export default withStyles(Styles)(Checkout);