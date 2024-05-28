from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

# Koneksi string MongoDB Atlas
uri = "mongodb+srv://Alfn:Alfanaja@cluster0.ey0q2gs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Buat client baru dan koneksi ke server
client = MongoClient(uri, server_api=ServerApi("1"))
db = client["Mahasiswa"]
collection = db["DataDiri"]

# Fungsi Map dan Reduce dalam bentuk string JavaScript
map_function = """
function() {
    emit(this.alamat, 1);
}
"""

reduce_function = """
function(key, values) {
    return Array.sum(values);
}
"""

# Menjalankan MapReduce
result = collection.map_reduce(map_function, reduce_function,"alamat_count")

# Menampilkan hasil
print("Hasil MapReduce (Jumlah Mahasiswa per Alamat):")
for doc in result.find():
    print(f"Alamat: {doc['_id']}, Jumlah Mahasiswa: {doc['value']}")
