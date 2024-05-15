// const
let DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Rotonda',
        creator: 'u1',
    },
    {
        id: 'p2',
        title: 'Centro Cívico',
        creator: 'u2',
    }
];

const getAllPlaces = (req, res, next)=>{
    res.json({places : DUMMY_PLACES});
};

const getPlacesByid = (req, res, next) => {
    console.log(req.params.pi);
    const place = DUMMY_PLACES.find(p => {
        return p.id === req.params.pi;
    });
    if (!place){
        
        const error = new Error('Lugar no existe para el id especificado');
        error.code = 404;
        next(error);
    }
    else {
        res.json({place});
    }
};

const getPlacesByUsers = (req, res, next)=>{
    const places = DUMMY_PLACES.find(p => {
        return p.creator === req.params.uid
    });
    
    if (!places){
        const error = new HttpError('Lugar no existe para el id de usuario especificado', 404);
        throw(error);
    }

    res.json(places);
};
//postPlaces
const savePlaces = (req, res, next)=>{
    const {title, creator} = req.body;
    const createdPlace = {
        id: uuid.v4(),
        // Manera Simplificada
        title,
        // title: title,
        creator
        // creator: creator
    };
    DUMMY_PLACES.push(createdPlace);
    res.status(201).json({place: createdPlace});
};

const updatePlaces = (req, res, next) => {
    const {title} = req.body;
    const placesid = req.params.pid;

    const updatePlace = {...DUMMY_PLACES.find(p =>  p.id === placesid)};
    const placeIndex = DUMMY_PLACES.findIndex(p => p.id === placeId);

    updatePlace.title = title;

    DUMMY_PLACES[placeIndex] = updatePlace;

    res.status(200).json({place: updatePlace});
};

// Lo nuevo
const deletePlace = (req, res, next) => {
    const placeId = req.params.pid;
    DUMMY_PLACES = DUMMY_PLACES.filter(p => p.id !== placeId)
    res.status(200).json({message: 'Lugar Borrado'});
};

exports.getAllPlaces = getAllPlaces;
exports.getPlacesByid = getPlacesByid;
exports.getPlacesByUsers = getPlacesByUsers;
// Lo nuevo
exports.savePlaces = savePlaces; 
exports.updatePlaces = updatePlaces;
// Lo nuevo
exports.deletePlace = deletePlace;