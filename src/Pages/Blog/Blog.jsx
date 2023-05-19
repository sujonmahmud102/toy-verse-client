import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')

    return (
        <div className='m-6 lg:m-16'>
            <div>
                {/* question 1*/}
                <h3 className='text-xl font-semibold mb-2 text-justify'>
                    Q1: What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </h3>
                {/* answer 1*/}
                <div className='mb-4 text-justify'>
                    <p>
                        <span className='font-semibold text-secondary underline decoration-wavy'>Answer:</span> <span className='font-bold'>Access Token:</span>
                    </p>
                    <ul className='list-disc ml-12'>
                        <li><span className='font-semibold'> Definition: </span> An access token is a credential that is used to access protected resources on an API or server. It is typically short-lived and grants the client limited access rights.</li>
                        <li><span className='font-semibold'> How it works: </span> When a user authenticates and is granted access, the server issues an access token. The client includes this token in subsequent requests to access protected resources. The server validates the token to ensure the client has the necessary permissions to perform the requested action.</li>
                        <li><span className='font-semibold'> Storage on the client-side: </span> Access tokens are typically stored in memory on the client-side, such as in a variable or in the browser's memory storage. </li>
                    </ul>
                </div>
                <div className='mb-4 text-justify'>
                    <p>
                        <span className='font-bold'>Refresh Token:</span>
                    </p>
                    <ul className='list-disc ml-12'>
                        <li><span className='font-semibold'> Definition: </span>  A refresh token is a long-lived credential used to obtain a new access token when the original access token expires. It is used to maintain the user's authenticated session.</li>
                        <li><span className='font-semibold'> How it works: </span> After the initial authentication and issuing of the access token, the server also provides a refresh token. When the access token expires, the client sends the refresh token to the server, which verifies its validity and issues a new access token, allowing the client to continue accessing protected resources.</li>
                        <li><span className='font-semibold'> Storage on the client-side: </span> Refresh tokens should be stored securely on the client-side to prevent unauthorized access. </li>
                    </ul>
                </div>
            </div>
            <div>
                {/* question 2*/}
                <h3 className='text-xl font-semibold mb-2 text-justify'>
                    Q2: Compare SQL and NoSQL databases?
                </h3>
                {/* answer 2*/}
                <div className='mb-4 text-justify'>
                    <p>
                        <span className='font-semibold text-secondary underline decoration-wavy'>Answer:</span> <span className='font-bold'>SQL Databases:</span>
                    </p>
                    <ul className='list-disc ml-12'>
                        <li><span className='font-semibold'> Structure: </span> SQL databases are based on a structured and predefined schema, where data is organized into tables with fixed columns and data types. Each row represents a record, and relationships between tables are established through primary and foreign keys.</li>
                        <li><span className='font-semibold'> Scalability: </span> SQL databases typically scale vertically by adding more powerful hardware resources. While horizontal scaling is possible, it often requires more effort and considerations due to the structured nature of the data.</li>
                        <li><span className='font-semibold'> Query Language: </span> SQL databases use SQL as the standard language for querying and manipulating data. It provides a declarative approach, allowing users to specify what data they want to retrieve without specifying how to retrieve it. </li>
                    </ul>
                </div>
                <div className='mb-4 text-justify'>
                    <p>
                        <span className='font-bold'>NoSQL Databases:</span>
                    </p>
                    <ul className='list-disc ml-12'>
                        <li><span className='font-semibold'> Structure: </span> NoSQL databases are schema-less or schema-flexible, allowing for dynamic and unstructured data. They can store data in various formats like key-value pairs, documents, columnar, or graphs.</li>
                        <li><span className='font-semibold'> Scalability: </span> NoSQL databases are designed to scale horizontally by distributing data across multiple servers or nodes. This approach allows for seamless and elastic scalability, accommodating large amounts of data and high traffic loads.</li>
                        <li><span className='font-semibold'> Query Language: </span> NoSQL databases may use different query languages, specific to their data model. For example, MongoDB uses a query language similar to JavaScript called MongoDB Query Language (MQL). </li>
                    </ul>
                </div>
            </div>
            <div>
                {/* question 3*/}
                <h3 className='text-xl font-semibold mb-2 text-justify'>
                    Q3: What is express js? What is Nest JS?
                </h3>
                {/* answer 3*/}
                <div className='mb-4 text-justify'>
                    <hp>
                        <span className='font-semibold text-secondary'>Answer:</span> Express.js is a minimal and flexible web application framework for Node.js. It provides a simple and straightforward way to build web applications and APIs.
                    </hp>
                    <br />
                    <p>
                        Nest.js is a progressive, opinionated framework for building scalable and maintainable server-side applications using TypeScript. It takes advantage of TypeScript's features and Object-Oriented Programming (OOP) principles.
                    </p>
                </div>
            </div>
            <div>
                {/* question 4 */}
                <h3 className='text-xl font-semibold mb-2 text-justify'>
                    Q4: What is MongoDB aggregate and how does it work?

                </h3>
                {/* answer 4 */}
                <div className='mb-4 text-justify'>
                    <p><span className='font-semibold text-secondary'>Answer:</span> In MongoDB, the aggregate method is used to perform advanced data aggregation operations on a collection. It allows you to process and analyze data by combining multiple stages into a pipeline. The aggregate pipeline consists of one or more stages, each performing a specific operation on the data.</p>

                    <p>Here's an overview of how the MongoDB aggregate method works:</p>

                    <ul className='list-disc ml-12'>
                        <li>
                            <strong>Pipeline Stages:</strong>
                            <ul>
                                <li>Each stage in the aggregate pipeline performs a specific operation on the data. Some common stages include <code>$match</code>, <code>$group</code>, <code>$project</code>, <code>$sort</code>, <code>$limit</code>, and <code>$unwind</code>.</li>
                                <li>Stages are specified as an array of objects, where each object represents a stage with its associated operation and parameters.</li>
                                <li>The order of the stages in the pipeline defines the order of operations applied to the data.</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Data Processing:</strong>
                            <ul>
                                <li>The aggregate pipeline processes documents in the input collection sequentially, passing the result of each stage to the next stage.</li>
                                <li>Each stage applies a transformation or aggregation operation on the data and produces an intermediate result.</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Data Transformation and Analysis:</strong>
                            <ul>
                                <li>The pipeline stages can perform a variety of operations, such as filtering documents, grouping data, calculating aggregate values, projecting specific fields, sorting, limiting results, and more.</li>
                                <li>Each stage in the pipeline operates on the input data, modifying or transforming it based on the defined operation.</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Result:</strong>
                            <ul>
                                <li>The final stage of the aggregate pipeline produces the result set based on the operations performed in the previous stages.</li>
                                <li>The output of the aggregate operation can be a single document or a collection of documents, depending on the specific operations used in the pipeline.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blog;