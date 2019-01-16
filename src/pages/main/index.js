import React, { Component } from "react";
import moment from "moment";
import { Container, Form } from "./styles";
import logo from "../../assets/logo.png";
import CompareList from "../../components/compareList";
import api from "../../services/api";

class Main extends Component {
  state = {
    repositoryInput: "",
    repositories: [],
    error: false,
    loading: false
  };

  handleForm = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(
        `/repos/${this.state.repositoryInput}`
      );

      repository.last_commit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositories: [...this.state.repositories, repository],
        repositoryInput: "",
        error: false
      });
    } catch (err) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        <Form withError={this.state.error} onSubmit={this.handleForm}>
          <input
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {this.state.loading ? (
              <i className="fa fa-spinner fa-pulse" />
            ) : (
              "OK"
            )}
          </button>
        </Form>
        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
export default Main;
