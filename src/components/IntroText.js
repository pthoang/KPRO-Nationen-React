import React from 'react';

export class IntroText extends React.Component {

    render() {
        const lorem = [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna ex, molestie ut est in, consequat ultrices libero. Nulla a nisl vel nulla ornare efficitur non eu lacus. Morbi dignissim metus eget nulla egestas efficitur. Fusce eu nibh ut massa posuere imperdiet. Maecenas sed augue nec purus ullamcorper mattis. Nunc luctus aliquam faucibus. Vestibulum dictum fermentum nunc ac vestibulum. Aliquam ornare efficitur enim tincidunt tincidunt. Pellentesque semper urna vitae suscipit condimentum.',
            'Pellentesque non orci cursus libero accumsan dapibus ut in sem. Nullam efficitur magna et dignissim mattis. Nullam metus orci, maximus sed malesuada nec, cursus iaculis justo. In pulvinar sed leo vel congue. Morbi eleifend, risus nec ultricies imperdiet, est dolor laoreet lectus, id rhoncus mauris lectus sit amet risus. Nunc consequat rhoncus tristique. Cras vestibulum, orci sed convallis tempus, nisi dui tincidunt tortor, nec finibus turpis erat sit amet ipsum. Vestibulum vel libero tempus, commodo turpis sed, dictum mauris. Aliquam erat volutpat. Nullam congue nibh ut elit pulvinar scelerisque ut quis ipsum. Vivamus rhoncus elementum erat, et sodales tellus pulvinar sit amet. In non pharetra sem, eget cursus ex. In rutrum accumsan porttitor. Sed in consectetur lorem. Ut ac lacus convallis, pretium ipsum blandit, porta libero. Curabitur at volutpat.'];
        const text = lorem.map( paragraph =>
            <p>
                {paragraph}
            </p>
        );
        return (
            <div className="introText">
                <h1>Maktkåringen</h1>
                {text}
            </div>
        );
    }
}
