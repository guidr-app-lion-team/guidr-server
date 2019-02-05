
const express = require('express');
const configureMiddleware = require('./config/middleware');
const dbUser = require('./helpers/userModel');
const dbAdventures = require('./helpers/adventureModel');
// const configureRoutes = require('./config/routes');


const server = express();

//middleware 
configureMiddleware(server);
// configureRoutes(server);

// User routes
server.get('/', (req, res) => {
  res.send('God saw all that He had made, and found it very good')
});

const getAllUsers = (req, res) => {
  dbUser.get()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ message: ` Failed to get all Users`, error: err });
    });
}

const getUser = (req, res) => {
  dbUser.get(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ message: `Failed to get User`, error: err });
    });
}


const addUser = (req, res) => {
  if (req.body.username === undefined || req.body.password === undefined) {
    res.status(400).json({ message: "username and password for the user is required." });
    return;
  }

  dbUser.insert(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed add user", error: err });
    });
}

const deleteUser = (req, res) => {
  dbUser.remove(req.params.id)
    .then(userDeleted => {
      if (userDeleted > 0) {
        res.status(200).json(userDeleted);
      } else {
        res.status(404).json({ message: `The User with the specified ID does not exist`, userDeleted });
      }
    })
    .catch(err => {
      res.status(500).json({ message: `Failed to delete User`, error: err });
    });

}

const updateUser = (req, res) => {
  if (req.params.id === undefined) {
    res.status(400).json({ errorMessage: "username and password are required for the user." });
    return;
  }
  dbUser.update(req.params.id, req.body)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json({ message: `Internal server error. Could not update User`, error: err });
    });

}

const getAdventuresOfUser = (req, res) => {
  const { id } = req.params;
  dbUser.getUserAdventures(id)
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      res.status(500).json({ message: `Could not find the adventures of the user with ${id}`, error: err });
    });
}

// User end points
server.get('/user', getAllUsers);
server.get('/user/:id', getUser);
server.post('/user', addUser);
server.delete('/user/:id', deleteUser);
server.put('/user/:id', updateUser);
server.get('/user/:id/adventures', getAdventuresOfUser);

// Adventures routes

const getAllAdventures = (req, res) => {
  dbAdventures.get()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get Adventures.', error: err });
    });
}

const getAdventureById = (req, res) => {
  dbAdventures.get(req.params.id)
    .then(post => {
      console.log(post)
      if (post.length !== 0) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: `Failed to get Adventure with specific ID: ${req.params.id} does not exist` });
      }
    })
    .catch(err => {
      res.status(500).json({ message: `The Adventure with id: ${req.params.id} could not be retrieved.`, error: err });
    });
}

const deleteAdventure = async (req, res) => {
  const { id } = req.params;
  try {
    const recordsDeleted = await dbAdventures.remove(id);
    if (recordsDeleted > 0) {
      res.status(200).json(recordsDeleted);
    } else {
      res.status(404).json({ message: `Failed to delete Adventure, Adventure does not exist` });
    }
  } catch (err) {
    res.status(500).json({ message: "The Adventure could not be removed", err });
  }
}

const addNewAdventure = (req, res) => {
  if (req.body.project_id === undefined || req.body.adventure_type === undefined || req.body.location === undefined) {
    res.status(400).json({ message: "Adventure type and location are for the adventure are required." });
    return;
  }

  dbAdventures.insert(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to save Adventure", error: err });
    });
}

const updateAdventure = (req, res) => {
  if (req.params.id === undefined || req.body.adventure_type === undefined || req.body.location === undefined) {
    res.status(400).json({ errorMessage: "Adventure type and location are for the adventure are required." });
    return;
  }
  dbAdventures.update(req.params.id, req.body)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json({ message: `Internal server error. Could not update Action`, error: err });
    });

}



// //Post end points
server.get('/adventures', getAllAdventures);
server.get('/adventures/:id', getAdventureById);
server.post('/adventures', addNewAdventure);
server.delete('/adventures/:id', deleteAdventure);
server.put('/adventures/:id', updateAdventure);




module.exports = server 
