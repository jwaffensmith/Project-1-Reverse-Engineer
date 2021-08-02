const { Movie } = require('../models');

const seed = async function() {
    try {
        await Movie.deleteMany();
        const newMovies = await Movie.insertMany([
            {
                title: 'Pride and Prejudice',
                description: 'Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class. Can each overcome their own pride and prejudice?',
                runtime: new Date(0, 0, 0, 2, 9),
                genre: ['Drama', 'Romance'],
                cast: ['Keira Knightley', 'Matthew Macfadyen', 'Brenda Blethyn'],
                image: 'https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_FMjpg_UX1000_.jpg',
            },
            {
                title: 'John Wick',
                description: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
                runtime: new Date(0, 0, 0, 1, 41),
                genre: ['Action', 'Crime', 'Thriller', 'Awesome'],
                cast: ['Keanu Reeves', 'Michael Nyqvist', 'Alfie Allen'],
                image: 'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg',
            },
            {
                title: 'The Lord of the Rings: The Two Towers',
                description: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
                runtime: new Date(0, 0, 0, 2, 59),
                genre: ['Action', 'Adventure', 'Drama', 'Fantasy'],
                cast: ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen'],
                image: 'https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg',
            },
            {
                title: 'Being John Malkovich',
                description: "A puppeteer discovers a portal that leads literally into the head of movie star John Malkovich.",
                runtime: new Date(0, 0, 0, 1, 53),
                genre: ['Comedy', 'Drama', 'Fantasy'],
                cast: ['John Malkovich', 'John Cusack', 'Cameron Diaz', 'Catherine Keener'],
                image: 'https://m.media-amazon.com/images/M/MV5BM2MxNzc2NDYtOTg3NC00ZTdlLTg4ZjctM2ZkYTA1NDQzZGQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
            },
            {
                title: 'Interstellar',
                description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                runtime: new Date(0, 0, 0, 2, 49),
                genre: ['Adventure', 'Drama', 'Sci-Fi'],
                cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
                image: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
            },
            {
                title: 'John Q',
                description: "John Quincy Archibald takes a hospital emergency room hostage when his insurance won't cover his son's heart transplant.",
                runtime: new Date(0, 0, 0, 1, 56),
                genre: ['Crime', 'Drama', 'Thriller'],
                cast: ['Denzel Washington', 'Robert Duvall', 'Gabriela Oltean'],
                image: 'https://m.media-amazon.com/images/M/MV5BMTcxNTQ1MzAyOF5BMl5BanBnXkFtZTYwNDg0ODk4._V1_FMjpg_UX1000_.jpg',
            },
            {
                title: 'Empire Records',
                description: "Twenty-four hours in the lives of the young employees at Empire Records when they all grow up and become young adults thanks to each other and the manager. They all face the store joining a chain store with strict rules.",
                runtime: new Date(0, 0, 0, 1, 30),
                genre: ['Comedy', 'Drama', 'Music', 'Romance'],
                cast: ['Anthony LaPaglia', 'Debi Mazar', 'Maxwell Caulfield'],
                image: 'https://m.media-amazon.com/images/M/MV5BMjExMmQ1NmItOWEyOC00NzZjLWE0NWItNmE1NmNkY2NmODk5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_FMjpg_UX1000_.jpg',
            },
            {
                title: 'Your Name.',
                description: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
                runtime: new Date(0, 0, 0, 1, 46),
                genre: ['Animation', 'Drama', 'Fantasy', 'Romance'],
                cast: ['Ryûnosuke Kamiki', 'Mone Kamishiraishi', 'Ryô Narita'],
                image: 'https://m.media-amazon.com/images/M/MV5BZjlmYWUwYzMtNjA4NS00MTRiLTlhMjctZDQ2YjNmZjA1M2MzXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg',
            },
            {
                title: 'Not Another Teen Movie',
                description: "A sendup of all the teen movies that have accumulated in the past two decades.",
                runtime: new Date(0, 0, 0, 1, 29),
                genre: ['Comedy'],
                cast: ['Chyler Leigh', 'Jaime Pressly', 'Chris Evans'],
                image: 'https://m.media-amazon.com/images/M/MV5BNTRhNWJmNTUtM2VhYi00NzdkLTgyYTUtMWMzMWI3MzFmNzk5XkEyXkFqcGdeQXVyNjgzMjI4ODE@._V1_FMjpg_UX1000_.jpg',
            },
            {
                title: 'Sorry to Bother You',
                description: "In an alternate present-day version of Oakland, telemarketer Cassius Green discovers a magical key to professional success, propelling him into a universe of greed.",
                runtime: new Date(0, 0, 0, 1, 52),
                genre: ['Comedy', 'Fantasy', 'Sci-Fi'],
                cast: ['LaKeith Stanfield', 'Tessa Thompson', 'Jermaine Fowler'],
                image: 'https://m.media-amazon.com/images/M/MV5BNjgwMmI4YzUtZGI2Mi00M2MwLWIyMmMtZWYzMWZmNzAyNmYwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
            },
            {
                title: 'The Prestige',
                description: "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
                runtime: new Date(0, 0, 0, 2, 10),
                genre: ['Drama', 'Mystery', 'Sci-Fi', 'Thriller'],
                cast: ['Christian Bale', 'Hugh Jackman', 'Scarlett Johansson'],
                image: 'https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg',
            },
            {
                title: 'Spirited Away',
                description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
                runtime: new Date(0, 0, 0, 2, 5),
                genre: ['Animation', 'Adventure', 'Family', 'Fantasy', 'Mystery'],
                cast: ['Miyu Irino', 'Rumi Hiiragi', 'Mari Natsuki'],
                image: 'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
            },
            {
                title: 'Kill Bill: Vol. 1',
                description: "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
                runtime: new Date(0, 0, 0, 1, 51),
                genre: ['Action', 'Crime', 'Drama', 'Thriller'],
                cast: ['Uma Thurman', 'David Carradine', 'Daryl Hannah'],
                image: 'https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
            },
            {
                title: 'Constantine',
                description: "Supernatural exorcist and demonologist John Constantine helps a policewoman prove her sister's death was not a suicide, but something more.",
                runtime: new Date(0, 0, 0, 2, 1),
                genre: ['Action', 'Fantasy', 'Horror', 'Mystery'],
                cast: ['Keanu Reeves', 'Rachel Weisz', 'Djimon Hounsou'],
                image: 'https://m.media-amazon.com/images/M/MV5BODRiNmFhY2EtMGY2OC00YjI2LWIyYjQtYzFiM2ZhNjdhYzE4XkEyXkFqcGdeQXVyNDY5MTUyNjU@._V1_FMjpg_UX1000_.jpg',
            },
            {
                title: 'The Departed',
                description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
                runtime: new Date(0, 0, 0, 2, 31),
                genre: ['Crime', 'Drama', 'Thriller'],
                cast: ['Leonardo DiCaprio', 'Matt Damon', 'Jack Nicholson'],
                image: 'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg',
            },
            {
                title: 'Arrival',
                description: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
                runtime: new Date(0, 0, 0, 1, 56),
                genre: ['Drama', 'Sci-Fi'],
                cast: ['Amy Adams', 'Jeremy Renner', 'Forest Whitaker'],
                image: 'https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_FMjpg_UX1000_.jpg',
            },
            {
                title: "Harry Potter and the Sorcerer's Stone",
                description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
                runtime: new Date(0, 0, 0, 2, 32),
                genre: ['Adventure', 'Family', 'Fantasy'],
                cast: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
                image: 'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_FMjpg_UX1000_.jpg',
            },
            {
                title: "Ikiru",
                description: "A bureaucrat tries to find meaning in his life after he discovers he has terminal cancer.",
                runtime: new Date(0, 0, 0, 2, 23),
                genre: ['Drama'],
                cast: ['Takashi Shimura', 'Nobuo Kaneko', "Shin'ichi Himori"],
                image: 'https://m.media-amazon.com/images/M/MV5BZmM0NGY3Y2MtMTA1YS00YmQzLTk2YTctYWFhMDkzMDRjZWQzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
            },
            {
                title: "Inception",
                description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
                runtime: new Date(0, 0, 0, 2, 28),
                genre: ['Action', 'Adventure', 'Sci-Fi', 'Thriller'],
                cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', "Elliot Page"],
                image: 'https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg',
            },
            {
                title: "The Dark Knight",
                description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
                runtime: new Date(0, 0, 0, 2, 32),
                genre: ['Action', 'Crime', 'Drama', 'Thriller'],
                cast: ['Christian Bale', 'Heath Ledger', "Aaron Eckhart"],
                image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
            },
        ]);
        console.log(newMovies);
    } catch (error) {
        console.log(error);
    }
};

seed();