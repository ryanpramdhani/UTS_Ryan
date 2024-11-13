import{promises  as fs} from 'fs';

async function readFileAsync(path: string): Promise <void> {
    try {
        const data = await fs.readFile(path, 'utf8');
        console.log(data);
    } catch (error) {
        console.error('Error Reading File', error)
    }
    
    
}

const filePath = 'src/contoh.txt';
readFileAsync(filePath);