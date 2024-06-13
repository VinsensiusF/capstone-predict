const tf = require('@tensorflow/tfjs-node');
const InputError = require('../exceptions/InputError');

async function predictClassification(model, image, gender, userId) {
  try {
    const tensor = tf.node
      .decodeJpeg(image)
      .resizeNearestNeighbor([224, 224])
      .expandDims()
      .toFloat();

    const classes = [
      'Melanocytic nevus',
      'Squamous cell carcinoma',
      'Vascular lesion',
    ];

    const male_faces = ['Square', 'Rectangle', 'Oblong', 'Round'];

    const female_faces = ['Square', 'Heart', 'Ovale', 'Oblong', 'Round'];

    const hair_types = ['Curly', 'Straight', 'Wavy'];

    const prediction = model.predict(tensor);
    const score = await prediction.data();
    const confidenceScore = Math.max(...score) * 100;

    const classResult = tf.argMax(prediction, 1).dataSync()[0];
    const label = classes[classResult];

    let explanation, suggestion;
    //TODO Ini isinya hasil prediksi muka dan jenis rambut orangnya

    //Case Male
    class FaceAnalyzer {
      constructor(gender, face, hairType) {
        this.gender = gender;
        this.face = face;
        this.hairType = hairType;
      }

      analyze() {
        if (this.gender === 'Male') {
          return this.analyzeMale();
        } else if (this.gender === 'Female') {
          return this.analyzeFemale();
        } else {
          throw new Error('Unsupported gender');
        }
      }

      analyzeMale() {
        switch (this.face) {
          case 'Square':
            return this.analyzeMaleSquare();
          case 'Rectangle':
            return this.analyzeMaleRectangle();
          case 'Oblong':
            return this.analyzeMaleOblong();
          case 'Round':
            return this.analyzeMaleRound();
          default:
            throw new Error('Unsupported male face shape');
        }
      }

      analyzeFemale() {
        switch (this.face) {
          case 'Square':
            return this.analyzeFemaleSquare();
          case 'Heart':
            return this.analyzeFemaleHeart();
          case 'Ovale':
            return this.analyzeFemaleOvale();
          case 'Oblong':
            return this.analyzeFemaleOblong();
          case 'Round':
            return this.analyzeFemaleRound();
          default:
            throw new Error('Unsupported female face shape');
        }
      }

      analyzeMaleSquare() {
        const results = [];
        switch (this.hairType) {
          case 'Curly':
            results.push({
              type: 'male',
              shape: 'Square',
              hairType: 'Curly',
              result: 'Male with square face and curly hair result 1',
            });
            results.push({
              type: 'male',
              shape: 'Square',
              hairType: 'Curly',
              result: 'Male with square face and curly hair result 2',
            });
            break;
          case 'Straight':
            results.push({
              type: 'male',
              shape: 'Square',
              hairType: 'Straight',
              result: 'Male with square face and straight hair result 1',
            });
            results.push({
              type: 'male',
              shape: 'Square',
              hairType: 'Straight',
              result: 'Male with square face and straight hair result 2',
            });
            break;
          case 'Wavy':
            results.push({
              type: 'male',
              shape: 'Square',
              hairType: 'Wavy',
              result: 'Male with square face and wavy hair result 1',
            });
            results.push({
              type: 'male',
              shape: 'Square',
              hairType: 'Wavy',
              result: 'Male with square face and wavy hair result 2',
            });
            break;
          default:
            throw new Error('Unsupported hair type');
        }
        return results;
      }

      analyzeMaleRectangle() {
        const results = [];
        switch (this.hairType) {
          case 'Curly':
            results.push({
              type: 'male',
              shape: 'Rectangle',
              hairType: 'Curly',
              result: 'Male with rectangle face and curly hair result 1',
            });
            results.push({
              type: 'male',
              shape: 'Rectangle',
              hairType: 'Curly',
              result: 'Male with rectangle face and curly hair result 2',
            });
            break;
          case 'Straight':
            results.push({
              type: 'male',
              shape: 'Rectangle',
              hairType: 'Straight',
              result: 'Male with rectangle face and straight hair result 1',
            });
            results.push({
              type: 'male',
              shape: 'Rectangle',
              hairType: 'Straight',
              result: 'Male with rectangle face and straight hair result 2',
            });
            break;
          case 'Wavy':
            results.push({
              type: 'male',
              shape: 'Rectangle',
              hairType: 'Wavy',
              result: 'Male with rectangle face and wavy hair result 1',
            });
            results.push({
              type: 'male',
              shape: 'Rectangle',
              hairType: 'Wavy',
              result: 'Male with rectangle face and wavy hair result 2',
            });
            break;
          default:
            throw new Error('Unsupported hair type');
        }
        return results;
      }

      analyzeMaleOblong() {
        const results = [];
        switch (this.hairType) {
          case 'Curly':
            results.push({
              type: 'male',
              shape: 'Oblong',
              hairType: 'Curly',
              result: 'Male with oblong face and curly hair result 1',
            });
            results.push({
              type: 'male',
              shape: 'Oblong',
              hairType: 'Curly',
              result: 'Male with oblong face and curly hair result 2',
            });
            break;
          case 'Straight':
            results.push({
              type: 'male',
              shape: 'Oblong',
              hairType: 'Straight',
              result: 'Male with oblong face and straight hair result 1',
            });
            results.push({
              type: 'male',
              shape: 'Oblong',
              hairType: 'Straight',
              result: 'Male with oblong face and straight hair result 2',
            });
            break;
          case 'Wavy':
            results.push({
              type: 'male',
              shape: 'Oblong',
              hairType: 'Wavy',
              result: 'Male with oblong face and wavy hair result 1',
            });
            results.push({
              type: 'male',
              shape: 'Oblong',
              hairType: 'Wavy',
              result: 'Male with oblong face and wavy hair result 2',
            });
            break;
          default:
            throw new Error('Unsupported hair type');
        }
        return results;
      }

      analyzeMaleRound() {
        const results = [];
        switch (this.hairType) {
          case 'Curly':
            results.push({
              type: 'male',
              shape: 'Round',
              hairType: 'Curly',
              result: 'Male with round face and curly hair result 1',
            });
            results.push({
              type: 'male',
              shape: 'Round',
              hairType: 'Curly',
              result: 'Male with round face and curly hair result 2',
            });
            break;
          case 'Straight':
            results.push({
              type: 'male',
              shape: 'Round',
              hairType: 'Straight',
              result: 'Male with round face and straight hair result 1',
            });
            results.push({
              type: 'male',
              shape: 'Round',
              hairType: 'Straight',
              result: 'Male with round face and straight hair result 2',
            });
            break;
          case 'Wavy':
            results.push({
              type: 'male',
              shape: 'Round',
              hairType: 'Wavy',
              result: 'Male with round face and wavy hair result 1',
            });
            results.push({
              type: 'male',
              shape: 'Round',
              hairType: 'Wavy',
              result: 'Male with round face and wavy hair result 2',
            });
            break;
          default:
            throw new Error('Unsupported hair type');
        }
        return results;
      }

      analyzeFemaleSquare() {
        const results = [];
        switch (this.hairType) {
          case 'Curly':
            results.push({
              type: 'female',
              shape: 'Square',
              hairType: 'Curly',
              result: 'Female with square face and curly hair result 1',
            });
            results.push({
              type: 'female',
              shape: 'Square',
              hairType: 'Curly',
              result: 'Female with square face and curly hair result 2',
            });
            break;
          case 'Straight':
            results.push({
              type: 'female',
              shape: 'Square',
              hairType: 'Straight',
              result: 'Female with square face and straight hair result 1',
            });
            results.push({
              type: 'female',
              shape: 'Square',
              hairType: 'Straight',
              result: 'Female with square face and straight hair result 2',
            });
            break;
          case 'Wavy':
            results.push({
              type: 'female',
              shape: 'Square',
              hairType: 'Wavy',
              result: 'Female with square face and wavy hair result 1',
            });
            results.push({
              type: 'female',
              shape: 'Square',
              hairType: 'Wavy',
              result: 'Female with square face and wavy hair result 2',
            });
            break;
          default:
            throw new Error('Unsupported hair type');
        }
        return results;
      }

      analyzeFemaleHeart() {
        const results = [];
        switch (this.hairType) {
          case 'Curly':
            results.push({
              type: 'female',
              shape: 'Heart',
              hairType: 'Curly',
              result: 'Female with heart face and curly hair result 1',
            });
            results.push({
              type: 'female',
              shape: 'Heart',
              hairType: 'Curly',
              result: 'Female with heart face and curly hair result 2',
            });
            break;
          case 'Straight':
            results.push({
              type: 'female',
              shape: 'Heart',
              hairType: 'Straight',
              result: 'Female with heart face and straight hair result 1',
            });
            results.push({
              type: 'female',
              shape: 'Heart',
              hairType: 'Straight',
              result: 'Female with heart face and straight hair result 2',
            });
            break;
          case 'Wavy':
            results.push({
              type: 'female',
              shape: 'Heart',
              hairType: 'Wavy',
              result: 'Female with heart face and wavy hair result 1',
            });
            results.push({
              type: 'female',
              shape: 'Heart',
              hairType: 'Wavy',
              result: 'Female with heart face and wavy hair result 2',
            });
            break;
          default:
            throw new Error('Unsupported hair type');
        }
        return results;
      }

      analyzeFemaleOvale() {
        switch (this.hairType) {
          case 'Curly':
            return [
              {
                type: 'female',
                shape: 'Ovale',
                hairType: 'Curly',
                result: 'Female with ovale face and curly hair result 1',
              },
              {
                type: 'female',
                shape: 'Ovale',
                hairType: 'Curly',
                result: 'Female with ovale face and curly hair result 2',
              },
            ];
          case 'Straight':
            return [
              {
                type: 'female',
                shape: 'Ovale',
                hairType: 'Straight',
                result: 'Female with ovale face and straight hair result 1',
              },
              {
                type: 'female',
                shape: 'Ovale',
                hairType: 'Straight',
                result: 'Female with ovale face and straight hair result 2',
              },
            ];
          case 'Wavy':
            return [
              {
                type: 'female',
                shape: 'Ovale',
                hairType: 'Wavy',
                result: 'Female with ovale face and wavy hair result 1',
              },
              {
                type: 'female',
                shape: 'Ovale',
                hairType: 'Wavy',
                result: 'Female with ovale face and wavy hair result 2',
              },
            ];
          default:
            throw new Error('Unsupported hair type');
        }
      }

      analyzeFemaleOblong() {
        const results = [];
        switch (this.hairType) {
          case 'Curly':
            results.push({
              type: 'female',
              shape: 'Oblong',
              hairType: 'Curly',
              result: 'Female with oblong face and curly hair result 1',
            });
            results.push({
              type: 'female',
              shape: 'Oblong',
              hairType: 'Curly',
              result: 'Female with oblong face and curly hair result 2',
            });
            break;
          case 'Straight':
            results.push({
              type: 'female',
              shape: 'Oblong',
              hairType: 'Straight',
              result: 'Female with oblong face and straight hair result 1',
            });
            results.push({
              type: 'female',
              shape: 'Oblong',
              hairType: 'Straight',
              result: 'Female with oblong face and straight hair result 2',
            });
            break;
          case 'Wavy':
            results.push({
              type: 'female',
              shape: 'Oblong',
              hairType: 'Wavy',
              result: 'Female with oblong face and wavy hair result 1',
            });
            results.push({
              type: 'female',
              shape: 'Oblong',
              hairType: 'Wavy',
              result: 'Female with oblong face and wavy hair result 2',
            });
            break;
          default:
            throw new Error('Unsupported hair type');
        }
        return results;
      }

      analyzeFemaleRound() {
        const results = [];
        switch (this.hairType) {
          case 'Curly':
            results.push({
              type: 'female',
              shape: 'Round',
              hairType: 'Curly',
              result: 'Female with round face and curly hair result 1',
            });
            results.push({
              type: 'female',
              shape: 'Round',
              hairType: 'Curly',
              result: 'Female with round face and curly hair result 2',
            });
            break;
          case 'Straight':
            results.push({
              type: 'female',
              shape: 'Round',
              hairType: 'Straight',
              result: 'Female with round face and straight hair result 1',
            });
            results.push({
              type: 'female',
              shape: 'Round',
              hairType: 'Straight',
              result: 'Female with round face and straight hair result 2',
            });
            break;
          case 'Wavy':
            results.push({
              type: 'female',
              shape: 'Round',
              hairType: 'Wavy',
              result: 'Female with round face and wavy hair result 1',
            });
            results.push({
              type: 'female',
              shape: 'Round',
              hairType: 'Wavy',
              result: 'Female with round face and wavy hair result 2',
            });
            break;
          default:
            throw new Error('Unsupported hair type');
        }
        return results;
      }
    }

    //DEFAULT FACE
    let face = 'Oblong';
    if (gender === 'Male') {
      //FROM MODEL
      face = male_faces[0];
    }
    if (gender === 'Female') {
      //FROM MODEL
      face = female_faces[0];
    }
    //FROM MODEL
    const hair_type = hair_types[0];

    const analyzer = new FaceAnalyzer(gender, face, hair_type);
    const result = analyzer.analyze();
    console.log(result); // Output: Array of objects for 'Ovale' face and 'Curly' hair

    if (label === 'Melanocytic nevus') {
      explanation =
        'Melanocytic nevus adalah kondisi di mana permukaan kulit memiliki bercak warna yang berasal dari sel-sel melanosit, yakni pembentukan warna kulit dan rambut.';
      suggestion =
        'Segera konsultasi dengan dokter terdekat jika ukuran semakin membesar dengan cepat, mudah luka atau berdarah.';
    }

    if (label === 'Squamous cell carcinoma') {
      explanation =
        'Squamous cell carcinoma adalah jenis kanker kulit yang umum dijumpai. Penyakit ini sering tumbuh pada bagian-bagian tubuh yang sering terkena sinar UV.';
      suggestion =
        'Segera konsultasi dengan dokter terdekat untuk meminimalisasi penyebaran kanker.';
    }

    if (label === 'Vascular lesion') {
      explanation =
        'Vascular lesion adalah penyakit yang dikategorikan sebagai kanker atau tumor di mana penyakit ini sering muncul pada bagian kepala dan leher.';
      suggestion =
        'Segera konsultasi dengan dokter terdekat untuk mengetahui detail terkait tingkat bahaya penyakit.';
    }

    return { confidenceScore, label, explanation, suggestion };
  } catch (error) {
    throw new InputError(`Terjadi kesalahan input: ${error.message}`);
  }
}

module.exports = predictClassification;
