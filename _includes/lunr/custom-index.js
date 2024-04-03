const content_to_merge = [docs[i].content, docs[i].abstract, docs[i].creators, docs[i].keywords, docs[i].institutions];
docs[i].content = content_to_merge.join(' ');

