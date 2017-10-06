<Item.Group>

  {this.state.cart.map((item, i) => {
    return <Item> <div key={i}>

        <img width="100px" height="100px" src={item.image_path} alt={item.description} />
        <div>
        <Item.Content>
          <Item.Header as='a'>Title: {item.product}</Item.Header>
          <Item.Meta>Description: {item.description}</Item.Meta>
          <div>Price: {item.price}</div>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          </Item.Content>
        </div>

      </div>
      </Item>
    })}
</Item.Group>
