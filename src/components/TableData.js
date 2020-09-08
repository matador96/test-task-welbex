import React from "react";
import { Table, Pagination, Button, Col, Spinner, Form } from "react-bootstrap";
import axios from "axios";
import GetDate from "./GetDate";

export default class TableData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [],
      fetching: false,
      filterstatus: false,
      perPage: 0,
      limit: 10,
      currentPage: 1,
      filtered: [],
      sortinput: "",
      sortfirst: "name",
      sortsecond: "equally",
    };
    this.PageChange = this.PageChange.bind(this);
    this.Search = this.Search.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  Search() {
    if (this.state.filterstatus) {
      this.setState({ filterstatus: false });
    } else {
      this.setState({ fetching: true });

      const body = {
        column: this.state.sortfirst,
        uslovie: this.state.sortsecond,
        text: this.state.sortinput,
      };

      axios
        .post("http://localhost:3002/api/searchdata", body)
        .then((response) => {
          this.setState({
            filtered: response.data,
            fetching: false,
            filterstatus: true,
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  getData() {
    this.setState({ fetching: true });

    // На бекенде offset = limit * currentpage

    axios
      .get(
        "http://localhost:3002/api/data/" +
          this.state.limit +
          "/" +
          this.state.currentPage
      )
      .then((response) => {
        let data = response.data;
        this.setState({
          table: data.rows,
          count: data.count,
          perPage: Math.ceil(parseInt(data.count) / this.state.limit),
          fetching: false,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  PageChange(e) {
    let current = parseInt(e.currentTarget.dataset.page);
    if (current < 1) {
      current = 1;
    } else if (current > this.state.perPage) {
      current = this.state.perPage;
    } else if (current >= 1 || current <= this.state.perPage) {
    } else {
      current = 1;
    }

    if (current !== this.state.currentPage) {
      this.setState(
        {
          currentPage: current,
        },
        () => this.getData()
      );
    }
  }

  Pagination() {
    let items = [];
    for (var i = 1; i < this.state.perPage; i++) {
      let active = false;

      if (i === this.state.currentPage) {
        active = true;
      }
      items.push(
        <Pagination.Item
          key={i}
          active={active}
          onClick={(e) => this.PageChange(e)}
          data-page={i}
        >
          {i}
        </Pagination.Item>
      );
    }
    return items;
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log();
    const {
      fetching,
      table,
      sortfirst,
      sortsecond,
      sortinput,
      filtered,
      filterstatus,
    } = this.state;
    return (
      <>
        <Col xs={12}>
          <Form.Row>
            <Form.Group as={Col} md="3">
              <Form.Label>Выбор колонки</Form.Label>
              <Form.Control
                as="select"
                defaultValue="name"
                name="sortfirst"
                onChange={this.handleChange}
                value={sortfirst}
              >
                <option value="name">Название</option>
                <option value="count">Количество</option>
                <option value="distance">Расстояние</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label>Выбор условия</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                name="sortsecond"
                onChange={this.handleChange}
                value={sortsecond}
              >
                <option value="equally">равно</option>
                <option value="contains">содержит</option>
                <option value="more">больше</option>
                <option value="less">меньше</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label>Поле для фильтрации</Form.Label>
              <Form.Control
                type="text"
                name="sortinput"
                placeholder="Ввод значения"
                value={sortinput}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label>&nbsp;</Form.Label>

              <Button
                variant={!filterstatus ? "primary" : "danger"}
                className="searchbutton"
                onClick={this.Search}
                disabled={fetching}
              >
                {!filterstatus ? "Поиск" : "Сбросить"}
              </Button>
            </Form.Group>
          </Form.Row>
        </Col>
        <Col xs={12}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Дата</th>
                <th>Название</th>
                <th>Количество</th>
                <th>Расстояние</th>
              </tr>
            </thead>

            {fetching ? (
              <Spinner animation="border" role="status">
                <span className="sr-only">Загрузка...</span>
              </Spinner>
            ) : (
              <tbody>
                {filterstatus ? (
                  <>
                    {filtered.length !== 0 ? (
                      <>
                        {filtered.map((list) => (
                          <tr>
                            <td>{GetDate(list.date)}</td>
                            <td>{list.name}</td>
                            <td>{list.count}</td>
                            <td>{list.distance}</td>
                          </tr>
                        ))}
                      </>
                    ) : (
                      "Данных нет"
                    )}
                  </>
                ) : (
                  <>
                    {table.map((list) => (
                      <tr>
                        <td>{GetDate(list.date)}</td>
                        <td>{list.name}</td>
                        <td>{list.count}</td>
                        <td>{list.distance}</td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            )}
          </Table>
        </Col>
        {!filterstatus && <Pagination>{this.Pagination()}</Pagination>}
      </>
    );
  }
}
