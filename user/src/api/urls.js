import { Login, CourseList, CourseDetails } from './endpoints';
import makePostRequest from './methods/makePostRequest';
import makeGetRequest from './methods/makeGetRequest';

export const login = (email, password) => 
    makePostRequest(Login, { email, password });

export const getCourseItems = () => 
    makeGetRequest(CourseList);

export const getCourseDetails = (uuid) => 
    makeGetRequest(`${CourseDetails}${uuid}`);

export const addItem = (item = "") => 
    makePostRequest();
