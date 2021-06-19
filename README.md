# Ukunuhi

Ukulele-Piano Translator

## Setup

1. Clone code from GitHub
   ```shell
   $ npm install
   ```
2. Database Setup
   a. Insert correct MySQL credentials in **database/config_example.js**
   b. Rename **config_exampl.js** to **config.js**
   ```shell 
   $ npm run seed
   ```
3. In the terminal run:
   ```shell
   $ npm run client
   $ npm run server
   ```
4. Application runs on port :3000

## Usage

##### Ukulele -> Piano

1. On any string, click an empty fret to move finger position there
2. The piano keys and chord will update automatically

##### Find a chord

1. Select any chord from the dropdown menu, and the ukulele and piano will display it
