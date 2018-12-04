
class ProductList extends React.Component {
    state = {
      products: [],
    };

    componentDidMount() {
      this.setState({ products: Seed.products });
    }

    //using the babel data-plugins transform-class-properties
    //also the best way to handle binding-by mapping

    //We can use arrow function for custom component methods (and avoid having to bind this)
    //We can define the intial state outside of constructor()

    //1. We think about and organize our React apps as components-with each reusable item or feature as its own component
    //2. Using jsx inside the render method
    //3. Data flows from parent to child through props
    //4. Event flows from children to parent through functions
    //5. utilizing React lifecycles methods
    //6. Stateful components AND how state is different from props
    //7. How to manipulate while treating it as immutable 


  //The constructor and state load with an empty array and the function below fills the array with data by setting the state

  //When adding something to an array don't use push us e CONCAT because push doesn't
  //specify when it may be created (asynchronous) but concat creates a new array
  //with previous values which means it will get created when evaluated
  /*
  yao.state.nums = [1,2,3];
  console.log(yao.state.nums);
  const nextNums = yao.state.nums.concat(4);
  console.log(nextNums);
  console.log(yao.state.nums);
  */
  handleProductUpVote = (productId) => {
    console.log(productId + ' was upvoted.');
    //Use map to iterate through the array-map returns a new array instead of modifying the current array
    //Creates new object on productid match not modification
    //Iterates through the items in product, when id matches, it returns the objects
    //with the vote iterated up one, then sets state with new product copy featuring one item more

    //Object.assign is useful when creating a modified version of an existing object
    const coffee = {};
    const noCream = { cream: false };
    const noMilk = { milk: false };
    Object.assign(coffee, noCream);
    console.log(coffee);
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
        });
      } else {
        return product;
      }
    });
    this.setState({
      products: nextProducts,
    })
  }

  render() {
    //Sorts the products according to vote total
    const products = this.state.products.sort((a, b) => (
      b.votes - a.votes
    ));
    const productComponents = products.map((product) => (
      <Product
        key={'product-' + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onVote={this.handleProductUpVote}
      />
    ));
    return (
      <div className='ui unstackable items'>
        {productComponents}
      </div>
    );
  }
}
/*
class MyReactComponent extends React.Component {
  constructor(props) {
    super(props); //always call this first

    //custon method bibndings here
    this.someFunction = this.someFunction.bind(this);
  }
}
//Every react component is rendered as a function of its this.props and this.state
//This means given a set of props and a set of state a react component will always render a single way
*/
class Product extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpVote = this.handleUpVote.bind(this);
  }
  handleUpVote() {
    this.props.onVote(this.props.id);
  }
  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img src={this.props.productImageUrl} />
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            <a onClick={this.handleUpVote}>
              <i className='large caret up icon' />
            </a>
            {this.props.votes}
          </div>
          <div className='description'>
            <a href={this.props.url}>
              {this.props.title}
            </a>
            <p>
              {this.props.description}
            </p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img
              className='ui avatar image'
              src={this.props.submitterAvatarUrl}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);
