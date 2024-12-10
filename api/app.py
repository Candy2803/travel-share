from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, Post, User, Stream
import os

app = Flask(__name__)
CORS(app)

# Configure SQLite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///travelshare.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

# Create tables
with app.app_context():
    db.create_all()

@app.route('/api/posts', methods=['GET'])
def get_posts():
    category = request.args.get('category')
    if category:
        posts = Post.query.filter_by(category=category).all()
    else:
        posts = Post.query.all()
    return jsonify([post.to_dict() for post in posts])

@app.route('/api/posts', methods=['POST'])
def create_post():
    data = request.json
    new_post = Post(
        title=data['title'],
        description=data['description'],
        category=data['category'],
        media_url=data['mediaUrl'],
        media_type=data['mediaType'],
        author_id=data['authorId']
    )
    db.session.add(new_post)
    db.session.commit()
    return jsonify(new_post.to_dict()), 201

@app.route('/api/streams', methods=['GET'])
def get_streams():
    active_streams = Stream.query.filter_by(is_active=True).all()
    return jsonify([stream.to_dict() for stream in active_streams])

@app.route('/api/streams', methods=['POST'])
def create_stream():
    data = request.json
    new_stream = Stream(
        title=data['title'],
        user_id=data['userId']
    )
    db.session.add(new_stream)
    db.session.commit()
    return jsonify(new_stream.to_dict()), 201

@app.route('/api/streams/<int:stream_id>', methods=['DELETE'])
def end_stream(stream_id):
    stream = Stream.query.get_or_404(stream_id)
    stream.is_active = False
    db.session.commit()
    return '', 204

if __name__ == '__main__':
    app.run(debug=True, port=5000)