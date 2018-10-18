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

export const getArticles = belongs_to => {
  const url = belongs_to
    ? `${API_URL}/topics/${belongs_to}/articles`
    : `${API_URL}/articles`;
  return axios.get(url).then(({ data }) => data.articles);
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

export const getTopics = () => {
  return axios.get(`${API_URL}/topics`).then(({ data }) => data.topics);
};

export const postComment = (id, body, created_by) => {
  return axios
    .post(`${API_URL}/articles/${id}/comments`, { body, created_by })
    .then(({ data }) => data.comment);
};

export const deleteComment = id => {
  return axios
    .delete(`${API_URL}/comments/${id}`)
    .then(({ data }) => data.comment);
};
