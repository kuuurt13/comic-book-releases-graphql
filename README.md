# Comic Book Releases GraphQL API

This is a GraphQL wrapper for the [ShortBoxed API](https://api.shortboxed.com/). ShortBoxed API is a simple and free api to help retrieve and query new comic book day data.

## Overview

### Types

#### Comic

```
type Comic {
  publisher: String
  description: String
  title: String
  price: String
  creators: String
  releaseDate: String
  diamondId: String
}
```

### Queries

#### New Releases

`new: [Comic]`

Returns this weeks current new releases

---

#### Previous Releases

`previous: [Comic]`

Returns last weeks new releases

---

#### Future Releases

`future: [Comic]`

Returns next weeks new releases

---

#### Get By Release Date

`releaseDate(releaseDate: String!): [Comic]`

Fetch data for titles with a specific release date

---

#### Get Comic By Id

`comic(diamondId: String): Comic`

Fetch data for a specific diamond id

---

#### Search Comics

```js
search(
  releaseDate: String
  publisher: String
  title: String
  creators: String
): [Comic]
```

Search new comic book releases

---

#### Available Releases

`releases: [String]!`

Fetch all available release dates

---

## Quick Start

- Run `npm install` to install dependencies
- Run `npm start` to start server at `http://localhost:4000/`

## Links

[ShortBoxed API](https://api.shortboxed.com/)
