import axios from 'axios';
import { API_URL } from './config.js';

export const vote = (id, type, direction) => {
  return axios
    .patch(`${API_URL}/${type}/${id}?vote=${direction}`)
    .then(({ data }) => data.votecount);
};

export const getComments = articleId => {
  return axios
    .get(`${API_URL}/articles/${articleId}/comments`)
    .then(({ data }) => data.comments);
};

export const getArticle = articleId => {
  return axios
    .get(`${API_URL}/articles/${articleId}`)
    .then(({ data }) => data.article);
};

export const getArticles = () => {
  return axios.get(`${API_URL}/articles`).then(({ data }) => data);
};

export const getArticlesForTopic = belongs_to => {
  return axios
    .get(`${API_URL}/topics/${belongs_to}/articles`)
    .then(({ data }) => data.articles);
};

export const getUser = username => {
  return axios
    .get(`${API_URL}/users/${username}`)
    .then(({ data }) => data.user);
};

export const postArticle = (belongs_to, article) => {
  return axios
    .post(`${API_URL}/topics/${belongs_to}/articles`, article)
    .then(({ data }) => data.article);
};
