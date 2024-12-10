from flask import Blueprint, request, jsonify
from ..models import db, Post

posts_bp = Blueprint('posts', __name__)

@posts_bp.route('', methods=['GET'])
def get_posts():
    category = request.args.get('category')
    if category:
        posts = Post.query.filter_by(category=category).all()
    else:
        posts = Post.query.all()
    return jsonify([post.to_dict() for post in posts])

@posts_bp.route('', methods=['POST'])
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