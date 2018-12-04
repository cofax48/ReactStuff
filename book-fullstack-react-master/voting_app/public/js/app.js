class ProductList extends React.Component {
  render() {
    return (
      <div className='ui items'>
        <p>
          Hello, Jooooosh! I am a basic React component.
        </p>
      </div>
    );
  }
}

//ReactDOM.render([what (whats the className?)], [where(on the page("body,header,<p>"))]);

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);
