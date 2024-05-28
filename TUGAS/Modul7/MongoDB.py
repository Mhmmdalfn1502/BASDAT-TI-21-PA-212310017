from pymongo.mongo_client import MongoClient 
from pymongo.read_concern import ReadConcern 
from pymongo.read_preferences import ReadPreference 
from pymongo.write_concern import WriteConcern 
from pymongo.server_api import ServerApi 

# Koneksi string MongoDB Atlas
uri = "mongodb+srv://Alfn:Alfanaja@cluster0.ey0q2gs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" 

# Buat client baru dan koneksi ke server
client = MongoClient(uri, server_api=ServerApi('1')) 
wc_majority = WriteConcern("majority", wtimeout=1000) 

def callback(session): 
    collection = session.client.Mahasiswa.DataDiri 
    data_mahasiswa = [
        {"NPM": "212310017", "nama": "Alfan", "alamat": "Bogor"},
        {"NPM": "212310018", "nama": "Fathur", "alamat": "Bandung"},
        {"NPM": "212310019", "nama": "Mahesa", "alamat": "Surabaya"},
        {"NPM": "212310020", "nama": "Angga", "alamat": "Medan"},
        {"NPM": "212310021", "nama": "Nagasa", "alamat": "Jakarta"}
    ]
    
    collection.insert_many(data_mahasiswa, session=session)

with client.start_session() as session: 
    session.with_transaction(
        callback, 
        read_concern=ReadConcern("local"), 
        write_concern=wc_majority, 
        read_preference=ReadPreference.PRIMARY
    )

print("Data mahasiswa berhasil dimasukkan.")
